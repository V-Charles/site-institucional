import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Colaborador } from '../../models/colaborador.model';

@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css']
})
export class ColaboradorFormComponent implements OnInit {
  form!: FormGroup;
  isEdicao = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ColaboradorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Colaborador
  ) {}

  ngOnInit(): void {
    this.isEdicao = !!this.data;
    
    this.form = this.fb.group({
      id: [this.data?.id],
      nome: [this.data?.nome || '', Validators.required],
      cargo: [this.data?.cargo || '', Validators.required],
      departamento: [this.data?.departamento || '', Validators.required]
    });
  }

  salvar(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}