import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent implements OnInit {
  imageList: string[] = [];
  selectedImage?: string;
  list: any;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.list = [
      {title:"KATILIM SERTİFİKASI",url:'assets/images/java.jpg'},
      {title:"KATILIM SERTİFİKASI",url:'assets/images/angular.jpg'},
      {title:"KATILIM SERTİFİKASI",url:'assets/images/.Net.jpg'},
      {title:"KALİTE YÖNETİM SİSTEMİ",url:'assets/images/iso.jpg'},
      {title:"KATILIM BELGESİ",url:'assets/images/5.muyK.jpg'},
      {title:"KATILIM BELGESİ",url:'assets/images/4.muyK.jpg'},
      {title:"YARIŞMA KATILIM KARTI",url:'assets/images/roket.jpg'},
      {title:"YARIŞMA KATILIM KARTI",url:'assets/images/4.muy.jpg'},
      {title:"YARIŞMA KATILIM KARTI",url:'assets/images/5.muy.jpg'},
    ]
  }

  openDialog(imageTitle?:string,imageUrl?:string){
    let dialogRef = this.dialog.open(PhotoDialog , {
      data:{title: imageTitle, url: imageUrl}
    })
  }
}

@Component({
  selector:'photo-dialog',
  templateUrl:'photo-dialog.html'
})
export class PhotoDialog {
  constructor(public dialogRef: MatDialogRef<PhotoDialog>,
    @Inject(MAT_DIALOG_DATA) public data:any ) {
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
