class Expense {
    constructor(description, amount, date, category) {
      this.description = description;
      this.amount = parseFloat(amount);
      this.date = date;
      this.category = category;
    }
  }
  
  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  let editIndex = -1;
  
  document.addEventListener('DOMContentLoaded', displayExpenses);
  
  function addOrUpdateExpense() {
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
  
    if (!description || !amount || !date || !category) {
      alert('Please fill in all fields');
      return;
    }
  
    const expense = new Expense(description, amount, date, category);
  
    if (editIndex >= 0) {
      expenses[editIndex] = expense;
      editIndex = -1;
    } else {
      expenses.push(expense);
    }
  
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
    clearForm();
  }
  
  function displayExpenses() {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';
    expenses.forEach((expense, index) => {
      expensesList.innerHTML += `
        <tr>
          <td>${expense.description}</td>
          <td>${expense.amount.toFixed(2)}</td>
          <td>${expense.date}</td>
          <td>${expense.category}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editExpense(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>
          </td>
        </tr>
      `;
    });
  }
  
  function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('description').value = expense.description;
    document.getElementById('amount').value = expense.amount;
    document.getElementById('date').value = expense.date;
    document.getElementById('category').value = expense.category;
    document.getElementById('editIndex').value = index;
    editIndex = index;
  }
  
  function deleteExpense(index) {
    if (confirm('Are you sure you want to delete this expense?')) {
      expenses.splice(index, 1);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      displayExpenses();
    }
  }
  
  function sortExpenses(property, order) {
    expenses.sort((a, b) => {
      let comparison = 0;
      if (a[property] > b[property]) {
        comparison = 1;
      } else if (a[property] < b[property]) {
        comparison = -1;
      }
      return order === 'asc' ? comparison : -comparison;
    });
    displayExpenses();
  }
  
  function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';
    document.getElementById('category').value = '';
    document.getElementById('editIndex').value = '';
  }
  