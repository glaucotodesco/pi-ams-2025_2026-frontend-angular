import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CurriculumService } from './curriculum.service';
import { CurriculumProps } from '../interfaces/CurriculumProps';

describe('CurriculumService', () => {
  let service: CurriculumService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8080/curriculums';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurriculumService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CurriculumService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all curriculums', () => {
    const mockCurriculums: CurriculumProps[] = [
      {
        id: 1,
        name: 'Test Curriculum',
        abbreviation: 'TC',
        courseId: 1,
        technologyArea: 'Information Technology',
        theoretical: 40,
        practical: 60,
        quantityClass: 100,
        modality: 'Presencial'
      }
    ];

    service.getAll().subscribe(curriculums => {
      expect(curriculums).toEqual(mockCurriculums);
      expect(curriculums.length).toBe(1);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockCurriculums);
  });

  it('should get curriculum by id', () => {
    const mockCurriculum: CurriculumProps = {
      id: 1,
      name: 'Test Curriculum',
      abbreviation: 'TC',
      courseId: 1,
      technologyArea: 'Information Technology',
      theoretical: 40,
      practical: 60,
      quantityClass: 100,
      modality: 'Presencial'
    };

    service.getById(1).subscribe(curriculum => {
      expect(curriculum).toEqual(mockCurriculum);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCurriculum);
  });

  it('should create a curriculum', () => {
    const newCurriculum: CurriculumProps = {
      id: 0,
      name: 'New Curriculum',
      abbreviation: 'NC',
      courseId: 2,
      technologyArea: 'Engineering',
      theoretical: 30,
      practical: 70,
      quantityClass: 100,
      modality: 'Híbrido'
    };

    service.create(newCurriculum).subscribe(curriculum => {
      expect(curriculum).toEqual(newCurriculum);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCurriculum);
    req.flush(newCurriculum);
  });

  it('should update a curriculum', () => {
    const updatedCurriculum: CurriculumProps = {
      id: 1,
      name: 'Updated Curriculum',
      abbreviation: 'UC',
      courseId: 1,
      technologyArea: 'Information Technology',
      theoretical: 50,
      practical: 50,
      quantityClass: 100,
      modality: 'Online'
    };

    service.update(1, updatedCurriculum).subscribe(curriculum => {
      expect(curriculum).toEqual(updatedCurriculum);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedCurriculum);
    req.flush(updatedCurriculum);
  });

  it('should delete a curriculum', () => {
    service.delete(1).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should handle error on getAll', () => {
    service.getAll().subscribe({
      next: () => fail('should have failed with 500 error'),
      error: (error) => {
        expect(error.message).toContain('Algo deu errado');
      }
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush('Server error', { status: 500, statusText: 'Server Error' });
  });
});
