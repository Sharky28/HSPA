import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!:NgForm;
  @ViewChild('formTabs') formTabs!: TabsetComponent;
  propertyTypes: Array<string>=['House',' Apartment','Duplex'];
  furnishTypes: Array<string>=['Fully',' Semi','Unfurnished'];
  directions : Array<string>=['East','West','South','North']

  propertyView : IPropertyBase={
    Id:null,
    Name:'',
    Price: null,
    SellRent:null,
    Ptype: null,
    Ftype:null,
    BHK:null,
    BuiltArea:null,
    City:null,
    RTM:null

  };

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(Form :NgForm){
    console.log("congrats for submitting");
    console.log("SellRent=" + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
