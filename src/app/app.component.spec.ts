import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '../../node_modules/@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'pecahan-rupiah'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pecahan-rupiah');
  }));

  it('should return result on click submit', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('#form'));
    element.triggerEventHandler('keydown', null);
  }));
});
