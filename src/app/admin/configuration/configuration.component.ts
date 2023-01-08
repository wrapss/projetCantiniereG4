import { Component, OnInit } from '@angular/core';
import { ConstraintService } from "src/app/_services/constraint.service";
import { IContraint } from "src/app/_interfaces/contraint";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  public constraint: IContraint = {
    orderTimeLimit: '',
    maximumOrderPerDay: 0,
    hours: '',
    minute: '',
  };

  constructor(private _constraintService: ConstraintService) { }

  ngOnInit(): void {
    this._constraintService.getContraint().subscribe(
      data => {
      // @ts-ignore
        this.constraint.maximumOrderPerDay = data[0]['maximumOrderPerDay'];
        // @ts-ignore
        this.constraint.orderTimeLimit = data[0]['orderTimeLimit'];
        let strArr = this.constraint.orderTimeLimit.split(':');
        this.constraint.hours = strArr[0];
        this.constraint.minute = strArr[1];
        // console.log(strArr);
        //this.constraint = data[0]
      }
    );
  }

  onSubmit() {
    this.constraint.orderTimeLimit = this.constraint.hours + ':'+ this.constraint.minute + ':00';
    this._constraintService.setConstraint(this.constraint).subscribe( data => console.log(data) );
  }

}
