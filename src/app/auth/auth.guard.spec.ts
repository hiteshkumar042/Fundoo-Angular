import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';
import { TokenService } from '../services/tokenservice/token.service';


describe('authGuard', () => {
  let expectedGuard: authGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers:[TokenService,Router]
    });
    const tokenService = TestBed.inject(TokenService);
    const router = TestBed.inject(Router);
    expectedGuard = new authGuard(tokenService,router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });
});



// describe('authGuard', () => {
    
//   const executeGuard: CanActivateFn = (...guardParameters) => 
//       TestBed.runInInjectionContext(() => authGuard(...guardParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
    
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });
// });

