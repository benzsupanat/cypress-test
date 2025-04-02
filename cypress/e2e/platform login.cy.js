// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

{/* <reference types="cypress" /> */}
import 'cypress-xpath';
import 'cypress-mochawesome-reporter/register';

describe('Login Functionality Test Cases', () => {
  const baseUrl = 'https://host250.dungbhumi.com/platform/login';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.on('uncaught:exception', (err, runnable) => {
      // ปิด error React จาก frontend ไม่ให้ Cypress fail test
      return false;
    });
  });
  

  it('TC_01 - Login with valid email and password', () => {
    cy.get('#email').type('benz.supanat@dungbhimi.com');
    cy.get('#password').type('dungbhumi13579');
    cy.get('.tw-bg-indigo-500').click();
    cy.url().should('include', 'https://host250.dungbhumi.com/platform/dashboard');
  });

  it('TC_02 - Login with empty email', () => {
    cy.get('#password').type('dungbhumi13579');
    cy.get('.tw-bg-indigo-500').click();
    // cy.contains('You have enter invalid login information').should('exist');
  });

  it('TC_03 - Login with invalid email format', () => {
    cy.get('#email').type('testdungbhumi');
    cy.get('#password').type('dungbhumi13579');
    cy.get('.tw-bg-indigo-500').click();
    // cy.contains('You have enter invalid login information').should('exist');
  });

  it('TC_04 - Login with empty password', () => {
    cy.get('#email').type('benz.supanat@dungbhimi.com');
    cy.get('.tw-bg-indigo-500').click();
    // cy.contains('You have enter invalid login information').should('exist');
  });

  it('TC_05 - Incorrect email or password', () => {
    cy.get('#email').type('benz.supanat@dungbhumi.com');
    cy.get('#password').type('dungbhimi13579');
    cy.get('.tw-bg-indigo-500').click();
    // cy.contains('You have enter invalid login information').should('exist');
  });

  it('TC_06 - Pressing enter key submits form', () => {
    cy.get('#email').type('benz.supanat@dungbhumi.com');
    cy.get('#password').type('dungbhumi13579{enter}');
    cy.url().should('include', 'https://host250.dungbhumi.com/platform/dashboard');
  });

  it('TC_07 - Click "Forget password"', () => {
    cy.contains('Forget password').click();
    cy.url().should('include', 'https://host250.dungbhumi.com/platform/password/reset');
  });

  it('TC_08 - Login with password containing uppercase characters', () => {
    cy.get('#email').type('benz.supanat@dungbhimi.com');
    cy.get('#password').type('Dungbhumi13579'); // มีตัวใหญ่
    cy.get('.tw-bg-indigo-500').click();
    cy.contains('Invalid credential').should('exist');
    // cy.url().should('include', 'https://host250.dungbhumi.com/platform/dashboard');

  });

  it('TC_09 - Login with password containing special characters', () => {
    cy.get('#email').type('benz.supanat@dungbhimi.com');
    cy.get('#password').type('Dun!gbhumi@13579');
    cy.get('.tw-bg-indigo-500').click();
    // ขึ้นอยู่กับว่ารหัสถูกหรือไม่จริง ถ้าตั้งไว้แบบนี้ต้องมีรหัสนี้จริงในระบบ
    // cy.contains('อีเมลหรือรหัสผ่านไม่ถูกต้อง').should('be.visible');
  });

  it('TC_11 - Attempt SQL Injection in email field', () => {
    cy.get('#email').type("' OR 1=1 --"); 
    cy.get('#password').type('dungbhumi13579');
    cy.get('.tw-bg-indigo-500').click();
    cy.contains('You have enter invalid login information').should('exist');
  });

  it('TC_12 - Attempt XSS injection in email field', () => {
    cy.get('#email').type('<script>alert(1)</script>');
    cy.get('#password').type('dungbhumi13579');
    cy.get('.tw-bg-indigo-500').click();
    cy.contains('You have enter invalid login information').should('exist');
  });

  // TC_13 - รหัสผ่านสั้นเกินไป
  it('TC_13 - Login with password shorter than minimum length', () => {
    cy.get('#email').type('benz.supanat@dungbhimi.com');
    cy.get('#password').type('12');
    cy.get('.tw-bg-indigo-500').click();
    cy.contains('You have enter invalid login information').should('exist');
  });

  // TC_14 - รหัสผ่านยาวเกินไป
  it('TC_14 - Login with overly long password', () => {
    const longPassword = 'a'.repeat(150);
    cy.get('#email').type('benz.supanat@dungbhimi.com');
    cy.get('#password').type(longPassword);
    cy.get('.tw-bg-indigo-500').click();
    // cy.contains('รหัสผ่านยาวเกินไป').should('be.visible'); // ปรับตามข้อความจริง
  });

// TC_20 - ล็อกอินผิดหลายครั้งติดต่อกัน
it('TC_20 - Multiple failed login attempts', () => {
  for (let i = 0; i < 5; i++) {
    cy.get('#email').clear().type('benz.supanat@dungbhimi.com');
    cy.get('#password').clear().type('wrongpassword');
    cy.get('.tw-bg-indigo-500').click();
    cy.wait(1000);
  }
  // cy.contains('บัญชีของคุณถูกล็อกชั่วคราว').should('be.visible'); // ปรับตามข้อความจริง
});
});
