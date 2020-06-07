import { Component, Input, forwardRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, FormBuilder, FormControl, Validators, ControlValueAccessor } from '@angular/forms';

import { FieldModel } from './cmjr-splitted-input.model';
import { CustomRenderer } from './custom.renderer';

@Component({
  selector: 'lib-cmjr-splitted-input',
  template: `
    <form *ngIf="form" [formGroup]="form"
      class="digit-group"
      autocomplete="off">
      <input *ngFor="let item of counter; let idx = index" 
          name="digit-{{ idx+1 }}" formControlName="digit-{{ idx+1 }}"
          cmjr-digit previous="digit-{{ idx }}" next="digit-{{ idx+2 }}" (elementCreated)="onElementCreated($event, idx+1)"
          class="digit" (keyup)="onKeyUp($event); $event.preventDefault();" [type]="type" maxlength=1/>
    </form>
  `,
  styleUrls: ['./cmjr-splitted-input.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => CmjrSplittedInputComponent), 
      multi: true
    }
  ]
})
export class CmjrSplittedInputComponent implements ControlValueAccessor {
  @Input() set digits(_digits: number) {
    if ( _digits > 0 ) {
      this.counter = Array(_digits)
      this.createForm(_digits)
    }
  }
  @Input() disabled = false
  @Input() type = 'text'

  counter: any
  elements = new Map<string, FieldModel>()

  form: FormGroup
  putOnForm = false

  val = ''

  onChange = (_: any) => {};
  onTouched = () => {}; 

  set value(val) {
    if ( ! this.disabled ) {
      this.val = val
      this.onChange(val)
      this.onTouched()
      this.putValueOnForm()
    }
  }

  get value() {
    return this.val
  }

  constructor(
    private renderer: CustomRenderer,
    private formBuilder: FormBuilder
  ) { }

  createForm(digits) {
    let group: any = {}

    for (let idx = 0; idx < digits; idx++) {
      group[`digit-${idx+1}`] = new FormControl('', Validators.required)
    }
    this.form = this.formBuilder.group(group)
    this.putValueOnForm()

    this.form.valueChanges.subscribe( values => {
      if ( this.form.valid && this.form.touched ) {
        let value = ''
        Object.keys(this.form.controls).forEach( key => {
          value = value.concat(this.form.get(key).value)
        })
        this.putOnForm = true
        this.writeValue(value)
      }
    })
  }

  putValueOnForm() {
    if ( this.form && this.val && ! this.putOnForm ) {
      Object.keys(this.form.controls).forEach( (key, idx) => {
        this.form.get(key).setValue(this.val[idx])
      })
    }
  }
  
  writeValue(value: any): void {
    this.value = value
  }
  
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn; 
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn; 
  } 

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  onKeyUp(e) {
    let element = this.elements.get(e.target.name)
    
    if(e.keyCode === 8 || e.keyCode === 37) {      
			let previous = this.elements.get(element.previous)

			if(previous) {
				this.renderer.invokeElementMethod(previous.element, 'focus', [])
			}
		} else if((
      e.keyCode >= 48 && e.keyCode <= 57) || 
      (e.keyCode >= 65 && e.keyCode <= 90) || 
      (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = this.elements.get(element.next)
			
			if(next) {
        next.element.nativeElement.disabled = false
				this.renderer.invokeElementMethod(next.element, 'focus', [])
			}
		}
  }

  onElementCreated(element: FieldModel, idx: number) {
    this.elements.set(`digit-${idx}`, element);
  }
}