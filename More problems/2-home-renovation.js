class HomeRenovation {

    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {

        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        this.tasks.push({ description, cost, priority });
        this.budget -= cost;
        return `The task '${description}' has been successfully added to the renovation plan.`;

    }

    markTaskAsCompleted(description) {
        let task = this.tasks.find(t => t.description === description);

        if (!task) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        this.completedTasks.push(task);
        this.tasks = this.tasks.filter(t => t.description !== description);

        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return `The priority cannot be zero or negative.`;
        }

        let priorityTask = this.tasks.filter(t => t.priority >= minimalPriority);
        if (priorityTask.length === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        return `You have ${priorityTask.length} tasks to prioritize.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error('No tasks have been completed yet!');
        }

        let output = [`Budget left $${this.budget}.`];

        output.push(`You have completed ${this.completedTasks.length} tasks.`);

        output.push(`Pending tasks in the renovation plan:`);

        for (const t of this.tasks) {
            output.push(`${t.description} - Cost: ${t.cost}, Priority: ${t.priority}`);
        }
        return output.join('\n');
    }
}



