import { Component } from '@angular/core';
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-vita',
  templateUrl: './vita.component.html',
  styleUrls: ['./vita.component.css']
})
export class VitaComponent {
  events: any[] = [];

  ngOnInit() {
    this.events = [
      {
        jobtitle: "Software-Architekt",
        company: "SHS - Stahl-Holding-Saar",
        startdate: "01/10/2022",
        enddate: "heute",
        icon: PrimeIcons.COG,
        tagcolor: 'green'
      },
      {
        jobtitle: "Servicemanager Production Support",
        company: "ZF Friedrichshafen AG",
        startdate: "01/10/2022",
        enddate: "30/09/2022",
        icon: PrimeIcons.COG
      },
      {
        jobtitle: "B.Sc. IT Analyst",
        company: "Hochschule Kaiserslautern",
        startdate: "01/10/2022",
        enddate: "heute",
        icon: PrimeIcons.HASHTAG,
        tagcolor: 'green'
      },
      {
        jobtitle: "Fachkoordinator Steuerungstechnik",
        company: "ZF Friedrichshafen AG",
        startdate: "01/05/2016",
        enddate: "31/01/2021",
        icon: PrimeIcons.COG
      },
      {
        jobtitle: "Staatl. geprüfter Techniker Elektrotechnik",
        company: "BFW Fachschule für Technik",
        startdate: "01/08/2018",
        enddate: "31/05/2020",
        icon: PrimeIcons.HASHTAG
      },
      {
        jobtitle: "Elektroniker Betriebstechnik",
        company: "ZF Friedrichshafen AG",
        startdate: "01/03/2013",
        enddate: "30/04/2016",
        icon: PrimeIcons.COG
      },
      {
        jobtitle: "Elektroniker Betriebstechnik",
        company: "Bartz-Werke GmbH",
        startdate: "28/02/2013",
        enddate: "01/03/2012",
        icon: PrimeIcons.COG
      },
      {
        jobtitle: "Studium Maschinenbau - ohne Abschluss",
        company: "HTW Saar",
        startdate: "28/02/2012",
        enddate: "01/10/2010",
        icon: PrimeIcons.HASHTAG
      },
      {
        jobtitle: "Arbeitssuchend",
        company: "-",
        startdate: "30/09/2010",
        enddate: "01/05/2010",
        icon: PrimeIcons.HOME
      },
      {
        jobtitle: "Wehrdienst",
        company: "Luftlandepionierkompanie 260",
        startdate: "01/07/2009",
        enddate: "30/04/2010",
        icon: PrimeIcons.ANDROID
      },
      {
        jobtitle: "Fachhochschulreife",
        company: "TGSBBZ 1 Saarlouis",
        startdate: "01/09/2008",
        enddate: "30/06/2009",
        icon: PrimeIcons.HASHTAG
      },
      {
        jobtitle: "Elektroniker unter Tage",
        company: "Deutsche Steinkohle AG",
        startdate: "31/08/2008",
        enddate: "01/06/2006",
        icon: PrimeIcons.COG
      },
      {
        jobtitle: "Ausbildung Elektroniker Betriebstechnik",
        company: "Deutsche Steinkohle AG",
        startdate: "31/05/2006",
        enddate: "01/09/2003",
        icon: PrimeIcons.COG
      },
      {
        jobtitle: "Mittlere Reife",
        company: "Martin Luther King-Schule",
        startdate: "31/08/2003",
        enddate: "01/03/2000",
        icon: PrimeIcons.HASHTAG
      },
      {
        jobtitle: "",
        company: "",
        startdate: "",
        enddate: ""
      }
    ];
  }
}
