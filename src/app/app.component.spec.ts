import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '../../node_modules/@angular/platform-browser';
import { DebugElement } from '../../node_modules/@angular/core';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    debugElement = fixture.debugElement;
  });

  it('should create the app', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = debugElement.componentInstance;
    // console.log(app);
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'pecahan-rupiah'`, async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('pecahan-rupiah');
  }));

  it('form invalid when empty', () => {
    expect(component.uangForm.valid).toBeFalsy();
  });

  it('nominal field validity', () => {
    const nominal = component.uangForm.controls['uang'];
    expect(nominal.valid).toBeFalsy();
  });

  it('should success if field empty', () => {
    let errors = {};
    const nominal = component.uangForm.controls['uang'];
    errors = nominal.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should success if pattern is invalid - case Rp 17,500', () => {
    let errors = {};
    const nominal = component.uangForm.controls['uang'];
    nominal.setValue('Rp 17,500');
    errors = nominal.errors || {};
    console.log('====>', errors);
    expect(errors['pattern']).toBeTruthy();
    console.log('invalid input');
  });

  it('should success if pattern is invalid - case Rp17,500', () => {
    let errors = {};
    const nominal = component.uangForm.controls['uang'];
    nominal.setValue('Rp17,500');
    errors = nominal.errors || {};
    console.log('====>', errors);
    expect(errors['pattern']).toBeTruthy();
    console.log('invalid input');
  });

  it('should success if pattern is invalid - case Rp2 500', () => {
    let errors = {};
    const nominal = component.uangForm.controls['uang'];
    nominal.setValue('Rp2 500');
    errors = nominal.errors || {};
    console.log('====>', errors);
    expect(errors['pattern']).toBeTruthy();
    console.log('invalid input');
  });

  it('should success if pattern is invalid - case 2 500', () => {
    let errors = {};
    const nominal = component.uangForm.controls['uang'];
    nominal.setValue('2 500');
    errors = nominal.errors || {};
    console.log('====>', errors);
    expect(errors['pattern']).toBeTruthy();
    console.log('invalid input');
  });

  it('should success if pattern is invalid - case 3000 Rp', () => {
    let errors = {};
    const nominal = component.uangForm.controls['uang'];
    nominal.setValue('3000 Rp');
    errors = nominal.errors || {};
    console.log('====>', errors);
    expect(errors['pattern']).toBeTruthy();
    console.log('invalid input');
  });

  it('should success if pattern is invalid - case Rp', () => {
    let errors = {};
    const nominal = component.uangForm.controls['uang'];
    nominal.setValue('Rp');
    errors = nominal.errors || {};
    console.log('====>', errors);
    expect(errors['pattern']).toBeTruthy();
    console.log('invalid input');
  });

  it('should return result on click submit', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = debugElement.query(By.css('#submit'));
    element.triggerEventHandler('keydown', null);
  }));

  it('should get pecahan - case 500000', async () => {
    component.getPecahan(500000);
    expect(component.pecahan[0]).toBe('5 lembar uang Rp 100000');
  });

  it('should get pecahan - case 223250', async () => {
    component.getPecahan(223250);
    expect(component.pecahan[0]).toBe('2 lembar uang Rp 100000');
    expect(component.pecahan[1]).toBe('1 lembar uang Rp 20000');
    expect(component.pecahan[2]).toBe('1 lembar uang Rp 2000');
    expect(component.pecahan[3]).toBe('1 lembar uang Rp 1000');
    expect(component.pecahan[4]).toBe('1 lembar uang Rp 200');
    expect(component.pecahan[5]).toBe('1 lembar uang Rp 50');
    expect(component.pecahan.length).toBeGreaterThan(0);
  });

  it('should failed get pecahan', async () => {
    component.getPecahan(15);
    console.log(component.pecahan);
    expect(component.pecahan.length).toBe(0);
  });
});
