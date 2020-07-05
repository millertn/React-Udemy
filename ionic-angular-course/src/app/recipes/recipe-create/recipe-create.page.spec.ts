import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeCreatePage } from './recipe-create.page';

describe('RecipeCreatePage', () => {
  let component: RecipeCreatePage;
  let fixture: ComponentFixture<RecipeCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
