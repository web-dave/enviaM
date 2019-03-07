import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  template: '',
  selector: 'app-my-nav'
})
class NavComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'enviaM'`, () => {
    expect(app.title).toEqual('enviaM');
  });

  it('should render title in a h1 tag', () => {
    app.title = 'I Love Testing';
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to I Love Testing!'
    );
  });
});
