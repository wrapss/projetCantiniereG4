import { Component, OnInit } from '@angular/core';
import { ConstraintService } from "../../_services/constraint.service";
import { IContraint } from "../../_interfaces/contraint";

/**
 * Component permettant d'afficher les contraintes de configuration de l'app
 */
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  /* Contraintes de configuration */
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
      }
    );
  }

  /**
   * Enregistre les modifications de la configuration
   */
  public onSubmit() {
    this.constraint.orderTimeLimit = this.constraint.hours + ':'+ this.constraint.minute + ':00';
    this._constraintService.setConstraint(this.constraint).subscribe( data => console.log(data) );
  }

}
