class Company {

    departments = {};
    departmentSalaries = {};

    addEmployee(name, salary, position, department) {

        if (name === undefined || name === null || name === '') {
            throw new Error('Invalid input!');
        }
        else if (salary === undefined || salary === null || salary < 0 || salary === '') {
            throw new Error('Invalid input!');
        }
        else if (position === undefined || position === null || position === '') {
            throw new Error('Invalid input!');
        }
        else if (department === undefined || department === null || department === '') {
            throw new Error('Invalid input!');
        } else {
            if (!this.departments[department]) {
                this.departments[department] = [];
            }
            this.departments[department].push({ name, salary, position });
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {

        let bestDepartment = '';
        let higherSalary = 0;
        let entries = Object.entries(this.departments);

        for (const [department, objects] of entries) {
            let salary = 0;
            let counter = 0;
            for (const object of objects) {
                salary += object.salary;
                counter++;
            }
            salary = salary / counter;
            if (salary > higherSalary) {
                higherSalary = salary;
                bestDepartment = department;
            }
        }

        let output = [];

        output.push(`Best Department is: ${bestDepartment}`);
        output.push(`Average salary: ${higherSalary.toFixed(2)}`);

        let bestEntries = Object.entries(this.departments[bestDepartment]);
        let sortEntries = bestEntries.sort((a, b) => {
            return (b[1].salary - a[1].salary) || (a[1].name.localeCompare(b[1].name));
        });

        for (const key in sortEntries) {
            output.push(`${sortEntries[key][1].name} ${sortEntries[key][1].salary} ${sortEntries[key][1].position}`);
        }

        return output.join('\n');

    }

};
