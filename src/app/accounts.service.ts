import { stringify } from 'querystring';

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, newStatus: string) {
    this.accounts.push({name, status: newStatus});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }

}
