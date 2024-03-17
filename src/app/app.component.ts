import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  data:any={
    supplierDetails: {
      companyName: "XYZ SYSTEMS LTD",
      companyAddress: "Thane",
      pkgPersonName: "Sanket Pawar",
      email: "Sanket.Pawar@gmail.com",
      vendorCode: "R12345",
      stateCountry: "MAHARASHTRA, INDIA",
      telNo: "Q5",
      faxNo: "Q5"
    },
    packageStatus:{
      "Approval Type":"Final",
      "Status":"Recommended",
      "Date of Approval":"28-04-2024"
    },
    programPartInfo:{
      receiverLocation: "ABC to VGH to TYX",
      partDimension:[120,130,200],
      partNo:12345678909,
      volume:75000,
      part_desc:"R_TRW_1234",
      partPerVehicle:1,
      partWeight:0.38,
      modelsApplicable:"Q5"
    },
    visual_reference:{
      "3.1 - Part":"../assets/defaultImg.png",
      "3.2 - Part":"../assets/defaultImg.png",
      "3.3 - Part":"../assets/defaultImg.png",
    },
    specificationData:[
      {
        density:"-",
        packagingStrategy:"-",
        cartonCode:"-",
        cartonType:"-",
        materialType:"-",
        securemnetClosureType:"-",
        totalWeight:"-",
        dimension:["-","-","-"],
        dunnageDesc:["-","-"],
        lables:["-","-"],
        ownership:"-"      
      },
      {
        density:5,
        packagingStrategy:"Returnable",
        cartonCode:"NA",
        cartonType:"Tree Bin Bag",
        materialType:"Tree Bin Bag",
        securemnetClosureType:"Remarks",
        totalWeight:2.19,
        dimension:[600,400,180],
        dunnageDesc:["Yes","Xyz"],
        lables:[2,"Adjacent Side"],
        ownership:"XYZ"      
      }
    ],
    shippingLogisticData:{
      vehicleTypeSize:"Closed XYZ",
      dimension:["NA","NA","NA"],
      transitMode:"NA",
      pryPacks:"NA",
      terms:"XY",
      materialClass:"NA",
      loopSize:"5 Days",
      lifeOfPackaging:"2 Years",
      loadUnloadResp:"ABCD",
      supplyAt:"Batch Lot",
      remarks:"Remarks",
      percentageUtiize:"76%"
    },
    approvalData:[
        {person:"Sanket Pawar",date:"23/02/2024"},
        {person:"Sanket Pawar",date:"23/02/2024"},
      ]
    }

    isArray(obj : any ): obj is any[]{
      return Array.isArray(obj)
   }

   entries(obj: any) {
    return Object.entries(obj);
  }
  }



