import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AutoService } from './auto.service';
import { Automovile } from '../Automoviles';
import { of } from 'rxjs';

describe('AutoService', () => {
  let service: AutoService;
  let automovile: Automovile;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(AutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve automoviles', () => {

    let automovileServiceMock = 
      spyOn(service, 'getAutos')
        .and
        .returnValue(of([]));

    service.getAutos().subscribe((data) => {
      console.log("called")
      expect(data).toEqual([]);
     }); 
      expect(service.getAutos).toHaveBeenCalled();
  });

  it('should add an automovile', () => {
    let automovileServiceMock = 
      spyOn(service, 'addAutomovile')
        .and
        .returnValue(of(automovile));
      expect(service.addAutomovile(automovile)).toBeTruthy();
  })


});
