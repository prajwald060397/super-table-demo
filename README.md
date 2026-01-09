SuperTable – Reusable PrimeNG Table Wrapper (Angular 18)

This project demonstrates a reusable superTable component built with Angular 18 (standalone) and PrimeNG p-table, along with a localhost playground to showcase different table features in isolation.

The goal is to provide a config-driven wrapper over PrimeNG p-table with a consistent API and clean architecture.

## ⚠️ Note on PrimeNG Version

The original requirement mentioned PrimeNG v19.  
During implementation, PrimeNG v19 was found to have compatibility issues with Angular 18’s
application builder related to the `provideAppInitializer` API.

To ensure a stable build and focus on the component architecture and functionality,
PrimeNG v18 is used in this project. PrimeNG v18 fully supports Angular 18,
standalone components, and all required `p-table` features demonstrated here.