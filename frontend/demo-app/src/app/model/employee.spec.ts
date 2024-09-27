import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee("John Doe", "johndoe@gmail.com")).toBeTruthy();
  });
});
