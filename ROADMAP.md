# Online Store
 
## Parts

### 1. Code
- Working online store
- Admin panel will be implemented as API
- Roles and Access will be granted by Environment (.env.template)
- Authentication as COOKIE Session and TOKEN Based access

### 2. Development Tools & Practice
- [ ] Tests (e2e, unit, integration)
- [x] Postman
- [x] Git & Gitflow
- [x] Linter & Formatters
- Changelog
- [x] Task management
- [ ] Heroku (Digital Ocean)
- [x] README.md


## Details

### Tasks

#### 25/10/2022. Roles and Access.
- [x] Update database and affected tables.
- [x] Middleware.
- [x] Update README.md and .env.template (project environment).
- [x] Deadline: 02.11.2022

Database:
- Table: User
- Field: Role (default: 0)

Roles list:
0. User (Client)
1. Product Manager
2. Order Manager
3. Director
4. Admin

Middleware:
- Read express.js middlewares.
- Route will use access.

#### 02/11/2022. Git & Postman.
- [x] (gitflow) Make branch development.
- [x] (gitflow) Make bracnh feature/postman.
- [x] (postman) Postman collection for auth.
- [x] (postman) Attach postman collection to branch feature/postman.
- [x] Deadline: 07/11/2022 

```
Master
|-> Dev
    |-> Feature
   
Master
|-> Dev
    |<- Feature

Master
|<- Dev
```

#### 10/11/2022
- [ ] API for Product, Catalog
- [ ] API for Users and Roles
- [ ] Update Postman API Collection
- [ ] Create feature branch
- [ ] Deadline: ??/11/2022
