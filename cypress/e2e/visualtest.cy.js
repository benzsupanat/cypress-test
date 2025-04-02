//<reference types="cypress" />
import 'cypress-mochawesome-reporter/register';
import 'cypress-xpath';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand(); // สำหรับ visual snapshot

describe('Visual Test - DMF Theme Change', () => {
  it('Before and After theme change should look different', () => {
    cy.visit('https://dmf.go.th/public/');
    cy.wait(1500);
    cy.matchImageSnapshot('before-theme-change');

    cy.xpath('//*[@id="changecss_display"]/div/div[2]/img').click();
    cy.wait(1000);
    cy.xpath('//*[@id="yellow"]').click();
    cy.wait(1000);

    cy.matchImageSnapshot('after-yellow-theme');
  });
});
