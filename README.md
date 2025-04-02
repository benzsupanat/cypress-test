# Dungbhumi Editor Cypress Testing

โปรเจกต์นี้เป็นชุดทดสอบอัตโนมัติ (Automated Testing) สำหรับ Dungbhumi Editor โดยใช้ Cypress เป็นเครื่องมือในการทดสอบ

## การติดตั้ง

1. ติดตั้ง Node.js (เวอร์ชั่น 14 ขึ้นไป)
2. Clone โปรเจกต์:
```bash
git clone https://github.com/Technolista/dungbhumi-editor-cypress.git
```
3. ติดตั้ง dependencies:
```bash
npm install
```
4. ติดตั้ง ChromeDriver
```bash
npm install -g cypress
```

## การรันทดสอบ

### เปิด Cypress Test Runner
```bash
npx cypress open
```

### รันทดสอบแบบ Headless
```bash
npx cypress run
```

## การสร้างรายงานการทดสอบ

โปรเจกต์นี้รองรับการสร้างรายงานการทดสอบในหลายรูปแบบ:

### HTML Report
```bash
npm run test:html
```
- รายงานจะถูกสร้างที่ `cypress/reports/html`
- มีการแสดงผลแบบ Interactive พร้อม Screenshots และ Charts
- เหมาะสำหรับการนำเสนอและวิเคราะห์ผลการทดสอบ

### XML Report (JUnit)
```bash
npm run test:xml
```
- รายงานจะถูกสร้างที่ `cypress/results`
- เหมาะสำหรับการ Integrate กับ CI/CD tools เช่น Jenkins

### JSON Report
- สร้างโดยอัตโนมัติพร้อมกับ HTML Report
- พบได้ที่ `cypress/reports/html/mochawesome.json`
- เหมาะสำหรับการนำข้อมูลไปประมวลผลต่อ

## โครงสร้างโปรเจกต์

- `/cypress` - ไดเรกทอรีหลักสำหรับไฟล์ทดสอบ
  - `/e2e` - ไฟล์ทดสอบ End-to-End
  - `/fixtures` - ข้อมูลทดสอบ
  - `/support` - ไฟล์สนับสนุนการทดสอบ
- `cypress.config.js` - ไฟล์การตั้งค่า Cypress

## การเขียนเทสเคส

1. สร้างไฟล์ทดสอบใหม่ใน `/cypress/e2e` โดยใช้นามสกุล `.cy.js`
2. เขียนเทสเคสโดยใช้รูปแบบของ Cypress
3. ทดสอบการทำงานผ่าน Cypress Test Runner

## แนวทางการพัฒนา

- ใช้ Page Object Model ในการจัดการ Selectors
- เขียน Comment อธิบายการทำงานของเทสเคสให้ชัดเจน
- ตั้งชื่อเทสเคสให้สื่อความหมาย

## การรายงานปัญหา

หากพบปัญหาในการใช้งาน สามารถแจ้งได้ที่:
- สร้าง Issue ใน GitHub Repository
- แจ้งทีมผู้พัฒนาโดยตรง

## เอกสารอ้างอิง

- [Cypress Documentation](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
