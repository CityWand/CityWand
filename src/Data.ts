import { NgModule, ErrorHandler } from '@angular/core';

export class Data {

    vehicles: any = {
        5050: {
            id: "5050",
            dp: "../assets/images/cab1.jpg",
            title: "SRS Cab-1",
            desc: "SRS Travels, Hyderabad",
            type: "Local Cab",
            typeBagdeColor: "#387ef5"
        },
        5051: {
            id: "5050",
            dp: "../assets/images/cab2.jpg",
            title: "SRS Cab-2",
            desc: "SRS Travels, Hyderabad",
            type: "Local Cab",
            typeBagdeColor: "#387ef5"
        },
        5052: {
            id: "5050",
            dp: "../assets/images/cab3.jpg",
            title: "SRS Cab-3",
            desc: "SRS Travels, Hyderabad",
            type: "Local Cab",
            typeBagdeColor: "#387ef5"
        }
    };

    favorites = [5050, 5051, 5052];
    recentVisits = [ 5051, 5052];
    constructor() {}
    getFavorites = function () {
        let favs = [];
        for(let id in this.favorites){
           let vehicle = this.vehicles[id];
           if(vehicle){
                favs.push(vehicle); 
           }
        }
        return favs;
    }
    getRecentVisits =  function () {
        let recent = [];
        for(let id in this.recentVisits){
           let vehicle = this.vehicles[id];
           if(vehicle){
                recent.push(vehicle); 
           }
        }
        return recent;
    }
}