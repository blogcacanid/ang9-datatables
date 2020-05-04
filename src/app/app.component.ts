import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang9-datatables';
  public pegawai = [
        {"Nip": "200503", "Nama": "Ade Kartono", "Alamat": "Jl. H. Azra\'i RT.007/01\r\nMenteng Dalam"},
        {"Nip": "200505", "Nama": "Amalia", "Alamat": "Jl. Ciak RT.004/01 No.18\r\nBukit Duri"},
        {"Nip": "200506", "Nama": "Arief Budiman", "Alamat": "Gg. Subur Ujung No.12 RT.012/015\r\nMenteng Atas"},
        {"Nip": "200507", "Nama": "Balqis", "Alamat": "Jl. Kampung Melayu Kecil III/14 RT.001/09"},
        {"Nip": "200509", "Nama": "Endah Suci Rahayu", "Alamat": "Harapan Indah\r\nJl. Melon VI Blok SM No.2"},
        {"Nip": "200510", "Nama": "Era Hapsari", "Alamat": "Jl. Puspa II/2 RT.002/01\r\nSenayan"},
        {"Nip": "200511", "Nama": "Erny Yulianty", "Alamat": "Jl. Kampung Melayu Kecil I/31 RT.004/011"},
        {"Nip": "200513", "Nama": "Euis Herawati", "Alamat": "Jl. Kalibata Utara III/32 RT.005/02"},
        {"Nip": "200514", "Nama": "Fitri Rizkiyanti", "Alamat": "Jl. Kebon Baru V RT.006/09 No.27\r\nTebet"},
        {"Nip": "200515", "Nama": "Untung Sugianto", "Alamat": "Cinere No.187 Kelapa Sawit Blok E"},
        {"Nip": "200516", "Nama": "Hasanah", "Alamat": "Jl. X No.10 RT.004/100\r\nKebon Baru"},
        {"Nip": "200517", "Nama": "Ira Ekawati", "Alamat": "Jl. Jatinegara Barat No.13 RT.011/03"},
        {"Nip": "200518", "Nama": "Jerry Manggreno", "Alamat": "Jl. Minangkabau RT.01/08 No. 1A\r\nManggarai"},
        {"Nip": "200519", "Nama": "Roskawati", "Alamat": "Perum Depok Indah I/A No.64 RT.002/09"},
        {"Nip": "200520", "Nama": "Mery Theresia", "Alamat": "Jl. H. Mochtar Raya No.23\r\nGg. Belimbing RT.002/01\r\nKreo-Lembang"},
        {"Nip": "200523", "Nama": "Aldiles", "Alamat": "Jl. Turi II RT.03/010 Depok I, Kemiri Muka"},
        {"Nip": "200524", "Nama": "Hendi Ekopanto", "Alamat": "Jl. Tambak II/24 Komp. POLRI Inkopol"},
        {"Nip": "200525", "Nama": "Arif Fadilah", "Alamat": "Jl. Penegak No.15 RT.03/02"},
        {"Nip": "200526", "Nama": "Lelly Kusumawati", "Alamat": "Jl. Jatinegara Barat No.24 RT.05/02"},
        {"Nip": "200527", "Nama": "Andriansyah", "Alamat": "Jl. Tebet Timur II F No.24 RT.05/07"},
        {"Nip": "200528", "Nama": "Bayu Chandra Purnomo", "Alamat": "Jl. Perkutut No.100 RT.06/08"},
        {"Nip": "200529", "Nama": "Herlianti", "Alamat": "Jl. Siaga Raya Komplek Siaga Baru Blok C No.6"},
  ];
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
	this.dtOptions = {
	  pagingType: 'full_numbers',
	  pageLength: 10,
	  processing: true
	};
  }
}