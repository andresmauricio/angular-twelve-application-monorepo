import { Injectable } from '@angular/core';

export interface Employee {
  id: string | number;
  name: string;
  email: string;
  position: string;
  phone: string;
  status: boolean;
}

const EMPLOYEES: Employee[] = [
  {
    id: '42f86869-339a-457d-bd03-a268c01aa71f',
    name: 'Colin Randle',
    email: 'crandle0@state.gov',
    position: 'Books',
    phone: '512-738-3635',
    status: false,
  },
  {
    id: 'dd1cb0f3-dcc6-44e5-841f-234a16e9bb24',
    name: 'Heather Havard',
    email: 'hhavard1@aol.com',
    position: 'Kids',
    phone: '407-288-5237',
    status: false,
  },
  {
    id: '805aca95-1d9d-4c28-8050-94b19d65f3d0',
    name: 'Abagail Burrow',
    email: 'aburrow2@goo.ne.jp',
    position: 'Health',
    phone: '523-402-5734',
    status: false,
  },
  {
    id: 'b9a80274-2e7b-45b0-812b-a7296eecac60',
    name: 'Wanids Conant',
    email: 'wconant3@pagesperso-orange.fr',
    position: 'Garden',
    phone: '469-893-4644',
    status: false,
  },
  {
    id: '8f011e39-4250-4f21-9603-77ddb467364a',
    name: 'Nicole Kneale',
    email: 'nkneale4@paypal.com',
    position: 'Sports',
    phone: '312-226-5466',
    status: true,
  },
  {
    id: 'ede42f22-af65-4b39-a1a2-0f1fd658b47e',
    name: 'Jade Commuzzo',
    email: 'jcommuzzo5@acquirethisname.com',
    position: 'Grocery',
    phone: '246-311-3048',
    status: false,
  },
  {
    id: '08331358-da78-4471-854c-2a620e459816',
    name: 'Roanna Maior',
    email: 'rmaior6@hostgator.com',
    position: 'Jewelery',
    phone: '118-474-8571',
    status: true,
  },
  {
    id: 'b61e875f-8ca8-4398-9e5f-748a4e3694c1',
    name: 'Evie Brightling',
    email: 'ebrightling7@wikispaces.com',
    position: 'Toys',
    phone: '370-275-0176',
    status: false,
  },
  {
    id: 'e87e8d7e-73d8-47fd-a4ed-16a262039da6',
    name: 'Birgit Tondeur',
    email: 'btondeur8@miibeian.gov.cn',
    position: 'Tools',
    phone: '567-373-9514',
    status: true,
  },
  {
    id: '429dc8ad-8d6a-463c-adf1-a75aa0228409',
    name: 'Fifi Bartolommeo',
    email: 'fbartolommeo9@soundcloud.com',
    position: 'Electronics',
    phone: '997-469-8049',
    status: true,
  },
  {
    id: '0995642d-f826-4951-8533-29f7666f4bc4',
    name: 'Estell Camlin',
    email: 'ecamlina@rediff.com',
    position: 'Home',
    phone: '720-253-7717',
    status: false,
  },
  {
    id: '1d77e171-b4d4-45fd-8633-8f8d435a2716',
    name: 'Uriel Lavell',
    email: 'ulavellb@hubpages.com',
    position: 'Garden',
    phone: '278-608-9781',
    status: false,
  },
  {
    id: 'f54f3310-325d-419d-9aae-179fdfcf2831',
    name: 'Gannie Trengrouse',
    email: 'gtrengrousec@mysql.com',
    position: 'Beauty',
    phone: '778-771-8718',
    status: false,
  },
  {
    id: '4e01553d-ab1d-4309-a36e-be1440b8d1cb',
    name: 'Nanine Hurcombe',
    email: 'nhurcombed@freewebs.com',
    position: 'Sports',
    phone: '132-181-0793',
    status: false,
  },
  {
    id: '256a969b-9a1c-4116-80e4-160740f5995d',
    name: 'Cherie Rasper',
    email: 'craspere@toplist.cz',
    position: 'Sports',
    phone: '124-838-9184',
    status: false,
  },
  {
    id: '8d9ceaa8-55b5-4fba-b2d1-33be847ab1a5',
    name: 'Smitty Birmingham',
    email: 'sbirminghamf@addthis.com',
    position: 'Industrial',
    phone: '665-747-3821',
    status: false,
  },
  {
    id: 'f9be51d2-30a2-477b-b994-629f65e40940',
    name: 'Elizabeth Janny',
    email: 'ejannyg@amazon.com',
    position: 'Health',
    phone: '725-526-9515',
    status: false,
  },
  {
    id: 'bbd6996e-73bf-4682-ab67-3e6da85fa046',
    name: 'Roxane Tolemache',
    email: 'rtolemacheh@360.cn',
    position: 'Automotive',
    phone: '166-479-3535',
    status: true,
  },
  {
    id: '3a21d0c7-d19b-4af6-b846-a84eeaf5aa2e',
    name: 'Lindsey Lashmar',
    email: 'llashmari@sitemeter.com',
    position: 'Automotive',
    phone: '398-468-9257',
    status: true,
  },
  {
    id: '306c9235-7d8d-45fb-bb7c-1c43c0b7244c',
    name: 'Xena Glisane',
    email: 'xglisanej@prlog.org',
    position: 'Baby',
    phone: '592-339-5033',
    status: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getListOfEmployees(): Employee[] {
    return EMPLOYEES;
  }

  deleteOneEmployee(i) {
    EMPLOYEES.splice(i, 1);
  }
}
