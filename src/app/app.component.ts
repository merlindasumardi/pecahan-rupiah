import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pecahan-rupiah';
  uangForm: FormGroup;
  uangPattern = /^(\R\p)?\s?(\d+(\.\d{3})*|(\d+))(\,\d{0,2})?$/;
  nominal: any;
  map = {
    100000: 0,
    50000: 0,
    20000: 0,
    10000: 0,
    5000: 0,
    2000: 0,
    1000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0
  };
  arr = Object.keys(this.map);

  pecahan: any = [];

  ngOnInit() {
    this.uangForm = new FormGroup({
      'uang': new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.uangPattern)]))
    });
  }

  onPressEnter(event) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

  onSubmit() {
      console.log(this.uangForm.value);
      let uang = this.uangForm.value.uang;
      const f = uang.split(',')[0];
      uang =  +f.replace(/\D+/g, '');

      this.getPecahan(uang);
  }

  getPecahan(uang) {
    this.pecahan = [];
    if (uang % 50 !== 0 && uang < 50) {
      alert('Tidak dapat dihitung');
    }

    while (uang >= 50) {
      for (let i = this.arr.length - 1 ; i >= 0 ; i--) {
        if (uang >= this.arr[i]) {
          this.map[this.arr[i]] += 1;
          uang -= +this.arr[i];
          break;
        }
      }
    }
    console.log(this.map);

    for (let i = this.arr.length - 1 ; i >= 0 ; i-- ) {
      if (this.map[this.arr[i]] > 0) {
        console.log(`${this.map[this.arr[i]]} lembar uang ${this.arr[i]}`);

        const answer = this.map[this.arr[i]] + ' lembar uang Rp ' + this.arr[i];

         this.pecahan.push(answer);
         this.map[this.arr[i]] = 0;

      }
    }

    console.log(this.pecahan);
  }
}
