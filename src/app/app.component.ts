import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // supplierDetails:{ [key: string]: string }={
  //   "Company Name":"XYZ SYSTEMS LTD",
  //   "Company Address":"Thane",
  //   "Pkg Person Contact Name":"Sanket Pawar",
  //   "Email":"Sanket.Pawar@gmail.com",
  //   "Vendor Code":"R12345",
  //   "State, Country":"MAHARASHTRA, INDIA",
  //   "Tel No":"Q5",
  //   "Fax No":"Q5"
  // }

  supplierDetails:any={
    companyName:"XYZ SYSTEMS LTD",
    companyAddress:"Thane",
    pkgPersonName:"Sanket Pawar",
    email:"Sanket.Pawar@gmail.com",
    vendorCode:"R12345",
    stateCountry:"MAHARASHTRA, INDIA",
    telNo:"Q5",
    faxNo:"Q5"
  }


  packageStatus:{[key:string]:string}={
    "Approval Type":"Final",
    "Status":"Recommended",
    "Date of Approval":"28-04-2024"
  }

  programPartInfo:any={
    receiverLocation: "ABC to VGH to TYX",
    partDimension:[120,130,200],
    partNo:12345678909,
    volume:75000,
    part_desc:"R_TRW_1234",
    partPerVehicle:1,
    partWeight:0.38,
    modelsApplicable:"Q5"
  }

  visual_reference:{[key:string]:string}={
    "3.1 - Part":"../assets/defaultImg.png",
    "3.2 - Part":"../assets/defaultImg.png",
    "3.3 - Part":"../assets/defaultImg.png"
  }

    Specifications=["Density (Qty of parts)","Packaging Strategy","Carton Code","Carton Type(Design)","Packaging Material Type","Securement / Closure Type","Total Loaded Wt. (kg - Full)","Outside Dimension (L X W X H) (mm)","Dunnage & Description","Labels (Quantity / Location)","Container Ownership"];

    primaryPackaging=["-","-","-","-","-","-","-","-","-","-","-"];

    secondaryPackaging=[5,"Returnable","NA","Tree Bin Bag","Tree Bin Bag","Remarks",2.19,[600,400,180],["Yes","Xyz"],[2,"Adjacent Side"],"XYZ"];

    approvalData={
      data:[
        {person:"Sanket Pawar",date:"23/02/2024"},
        {person:"Sanket Pawar",date:"23/02/2024"},
      ]
    }
  }



