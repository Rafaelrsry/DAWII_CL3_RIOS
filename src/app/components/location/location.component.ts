import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/products';
import { ProductService } from '../../service/product.service';
import { LocationService } from '../../service/location.service';
import { Location } from '../../models/location';


@Component({
  selector: 'app-location',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {

  products!: Product[];
  location!: Location[];


  locations: any[] = [];

  constructor(private locationservice: LocationService) {}


  ngOnInit(): void {
    this.locationservice.getLocationsByType('Planet').subscribe(
      (data: any[]) => {
        this.locations = data;
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }



}