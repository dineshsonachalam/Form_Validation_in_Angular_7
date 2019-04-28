# Form validation in Angular 7

#### Step 1: Install Angular CLI
```
sudo npm install -g @angular/cli
```

#### Step 2: Create a new project
```
sudo ng new simpleform
```
It asks for couple of questions and choose the answer like the below:
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax ]
```
It generate a single component that can be found in /src/app/
```
/app.component.html
/app.component.scss
/app.component.ts
```
Here **/app.component.ts** define @component decorator, provides configuration options for a particular component.
#### Step 3: Try running the angular 7 project
```
cd simpleform
ng serve
```
You can view the application in http://localhost:4200/

#### Step 4: Create a new component:
```
// ng generate component <<Component_Name>>
   sudo ng generate component signup-create
```

It generates the following files:
```
CREATE src/app/signup-create/signup-create.component.scss (0 bytes)
CREATE src/app/signup-create/signup-create.component.html (32 bytes)
CREATE src/app/signup-create/signup-create.component.spec.ts (671 bytes)
CREATE src/app/signup-create/signup-create.component.ts (297 bytes)
UPDATE src/app/app.module.ts (501 bytes)

```

#### Step 5: Testing the new component:
In the new component **signup-create.component.ts** has the following the attributes called html selector, templateURL and styleURL.
```
@Component({
  selector: 'app-signup-create',
  templateUrl: './signup-create.component.html',
  styleUrls: ['./signup-create.component.scss']
})
```

We can use the components html selector in our app's main components html file to see the html content of signup-create component.
```
Path: app.component.html
Add the following
<section>
  <app-signup-create></app-signup-create>
</section>

<router-outlet></router-outlet>
```
Here <router-outlet> acts as a placeholder that Angular dynamically fills based on the current router state.

<p align="center">
  <img  src="https://github.com/dineshsonachalam/Form_Validation_in_Angular_7/blob/master/assets/images/1.png">
</p>


### Step 6: Create an HTML form for my appication
1. Username -> String
2. Email -> Email 
3. No of work experience -> Int
4. Form Submit -> Submit or Click response