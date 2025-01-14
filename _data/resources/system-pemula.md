---
template: BlogPost
path: /resources/Baru-Ingin-Ke-System
date: 2022-07-12T07:08:53.137Z
title: Aku "Engineer" Aku Niscaya
thumbnail: ""
metaDescription: Panduan bagi yang baru akan mulai cemplung ke System Engineer dan DevOps.
---
# FAQ: Jalan Gila Jadi System Engineer & DevOps – Jadi kamu telah memutuskannya?
*Di dunia ini, reboot itu solusi, downtime itu seni, dan error log adalah puisi.. :p*   

---

## **1. Apa itu System Engineer dan DevOps?**
- **System Engineer:** Orang yang memastikan server atau VM nyala, storage aman, dan jaringan lancar meskipun admin lain lupa baca dokumentasi. Fokusnya di baremetal, storage, dan jaringan tingkat lanjut. Orang yang bikin server tetap hidup meskipun disiksa user, DDoS, dan admin lain. Pekerjaan mereka mulai dari ngutak-atik kernel sampai nge-tweak semua yang berekstensi .conf.  
- **DevOps:** Mereka adalah penjaga pipeline dan master otomatisasi. Tugasnya menghapus jarak antara developer dan operations sambil memastikan semuanya nggak meledak. Orang yang dituduh sebagai penyelamat, tapi sering diminta deploy dadakan sambil ngemil mie instan. DevOps itu lebih kayak si tukang sulap yang bikin code dari developer jalan mulus sampai production (kadang nggak mulus, tapi yaudah).

**QOTD:** *"Kalau server stabil, itu karena doa admin. Kalau crash, itu karena kode developer."*  

---

## **2. Apa yang harus saya pelajari dulu sebagai pemula?**
**Fundamental yang bikin kamu survive di dunia ini:**
1. **Linux / FreeBSD:**  
   - Kuasai command dasar (`grep`, `awk`, `sed`, `systemctl`). Tantang dirimu di [OverTheWire](https://overthewire.org/wargames/bandit/) Bandit hingga sampe level 34
   - Pahami gambaran arsitektur OS. Minimal bisa bedakan `user mode` vs `kernel mode`
   - Pelajari `iptables` biar ngerti kenapa firewall kamu bisa memblokir internetmu sendiri.
   - Kalau bisa nulis script `bash` itu bagus. `Python` itu bonus. Dan bahasa `C` itu anugerah yang berlimpah
2. **Networking:**  
   - Ngerti DNS, TCP/IP, dan HTTP. Kalau nggak tahu, coba googling "Kenapa internet mati."
   - Ngerti kenapa ping 127.0.0.1 nggak butuh kabel LAN dan WiFi.
   - Konsep 7 OSI Layer mesti menyatu dengan jiwa (lupakan mantanmu :p).
3. **Dependency Management:**
   - Gunakan **Maven** (Java), **npm** (JS), **cargo** (Rust), **cmake** (C++), dan **NuGet** (C#), **pip** (Python), **SPM** (Swift), **Gradle** (Android). (Makanya pakai Golang! wkwk)
   - Semua ini bakal bikin hidup lebih mudah. Tapi, kalau salah versi, bersiaplah untuk kehancuran.  
4. **CI/CD:**
   - Mulai dari Jenkins, GitHub Actions, atau GitLab CI/CD.
   - Git, Wajib paham!. Kalau nggak ngerti git reset, ya, reset hidup aja.
5. **Infrastructure as Code (IaC):**
   - [Terraform](https://www.terraform.io/) buat provisioning, [Ansible](https://github.com/ansible/awx) buat konfigurasi. Atau [Chef](https://www.chef.io/)
6. **Containerization:**
   - Belajar Docker dulu. Kubernetes nanti kalau mau ngetes batas kesabaranmu (biar nggak nangis duluan).

**QOTD:** *"Kalau nggak ngerti `iptables`, kamu hanya tamu di dunia jaringan."* 

---

## **3. Gimana cara bikin aplikasi ready untuk production?**
1. **Build Tools:**  
   - Build tools adalah senjata rahasia setiap developer yang DevOps wajib tahu. Mengubah kode menjadi aplikasi nyata, meskipun kadang lebih terlihat seperti "ritual pengorbanan CPU." Di **Java**, ada `Maven` yang terlalu cinta XML, atau `Gradle` yang bikin kamu beli RAM baru hanya untuk tetap lambat. **Go** datang dengan `go build`, secepat kilat kecuali kamu lupa import library. **Rust** punya `cargo`, yang kalau sukses, bikin kamu merasa lebih pintar dari biasanya (padahal hanya hoki). Di **Python**, `setuptools` dan `PyInstaller` terlihat sederhana sampai dependency-mu berubah jadi jaring laba-laba. **C++** dengan `CMake` dan `Make` bikin kamu nulis build script lebih panjang dari aplikasinya. `MSBuild` di **C#** terlihat solid, tapi crash tanpa pesan error adalah bagian dari "misterinya." **Node.js** dengan `npm` dan `yarn` bikin storage kamu penuh dengan node_modules, sementara **Swift** dan `Xcode` adalah alasan kenapa banyak developer Apple sering "meditasi." **Android?** `Gradle` adalah simulator sabar yang bikin kamu nyeduh kopi sambil nunggu build selesai. Build tools, meskipun sering bikin frustrasi, adalah pengingat bahwa keberhasilan aplikasi sering kali lahir dari kekacauan log panjang dan error yang bikin kita tertawa (atau menangis). 😂  
2. **CI/CD Pipeline:**  
   - Otomasi build dan deploy dengan Jenkins atau GitHub Actions. Kalau capek, pakai Gitlab! 
3. **Scaling:**  
   - Tambahkan Kubernetes untuk orkestrasi container.
   - Gunakan Nginx atau [HAProxy](https://www.haproxy.org/) untuk routing dan load balancing.
   - Tambahkan API Gateway untuk traffic management di layer service proxy. Ada [Kong](https://docs.konghq.com/gateway/latest/), [Traefik](https://traefik.io/), [Istio / Envoy](https://istio.io/) dan [KrakenD](https://www.krakend.io/)

**QOTD:** *"Kalau pipeline build gagal, itu kesalahan script. Kalau berhasil? Itu kebetulan."*  

---

## **4. Bagaimana scaling database besar?**
1. **Horizontal Scaling:**  
   - Gunakan [**Vitess**](https://vitess.io/) untuk sharding database MySQL.  
2. **Caching:**  
   - Tambahkan [**Redis**](https://redis.io/) buat data yang sering diakses.  
3. **Distributed Database:**  
   - Gunakan **TiKV** untuk database yang bisa tahan gempa (data).  

**QOTD:** *"Database scaling itu kayak MLM. Semakin banyak node, semakin rumit hidupmu."* 

---

## **5. Apa yang perlu dipahami tentang Big Data?**
1. **Data Storage:**  
   - **Hadoop HDFS** untuk data terdistribusi.  
2. **Processing:**  
   - Gunakan **Apache Spark** untuk analisis real-time.
   - Kamu bisa pakai [Redash](https://redash.io/) untuk konek ke semua DBmu.
3. **Analytic and Log Management:**  
   - **ELK Stack (Elasticsearch, Logstash, Kibana)** untuk data analisis, visualisasi, termasuk melacak error yang bikin begadang.
   - **OpenSearch** kalau kamu begadang nggk bisa2 install ELK :p.
   - Jangan lupa belajar MLOps kalau udah punya data! 

**QOTD:** *"Big Data artinya kita punya semua data, tapi tetap nggak tahu apa yang kita cari."*  

---

## **6. Bagaimana tentang Networking?**
1. **iptables /pf:**  
   - Dasar firewall, tapi hati-hati, salah konfigurasi bikin semua koneksi mati.  
2. **Cilium:**  
   - Networking berbasis eBPF untuk Kubernetes.  
3. **OpenVPN atau Wireguard:**  
   - Solusi untuk akses jaringan internal. Tapi siap-siap troubleshoot kalau user nggak ngerti password. (Biar kalian ngerti bikin VPN sendiri)
4. **OPNSense/PFSense:**
   - Sebagai hiburan kamu bisa jelajahi [OPNSense](https://opnsense.org/) atau [PFSense](https://www.pfsense.org/). Dah paket komplit itu dalemnya! 

**QOTD:** *"Kalau jaringan lambat, salah user. Kalau down, salah admin."*  

---

## **7. Tools untuk Streaming dan Messaging?**
1. **Streaming:**  
   - **Kafka** untuk streaming data besar.  
   - **Apache Spark Streaming** untuk analitik real-time.  
2. **Messaging:**  
   - **RabbitMQ:** Cocok untuk tugas kecil.  
   - [**NATS:**](https://nats.io/) Cepat, tapi harus hati-hati kalau skala besar.  

**QOTD:** *"Kalau Kafka penuh, itu salah developer. Kalau RabbitMQ crash, itu salah DevOps."*  

---

## **8. Apa yang harus saya tahu soal observability?**
1. **Metrics:**  
   - **Prometheus dan Grafana** untuk monitoring server dan aplikasi.  
2. **Logs:**  
   - **ELK Stack** untuk analisis log. Kalau nggak cukup, tambahkan **Grafana Loki**.  
3. **Tracing:**  
   - Gunakan [**Jaeger**](https://www.jaegertracing.io/), opentelemetry, [**sentry**](https://sentry.io/) untuk melacak request antar mikroservis.  

**QOTD:** *"Kalau observability gagal, semua jadi Sherlock Holmes di log server."*  

---

## **9. Bagaimana tentang storage?**
1. **Clustered Storage:**  
   - [**CEPH:**](https://ceph.io/en/) Untuk penyimpanan terdistribusi besar.  
   - [**Longhorn:**](https://longhorn.io/) Cocok untuk Kubernetes.  
2. **File Storage:**  
   - **FreeNAS:** Solusi open-source untuk penyimpanan file.  

**QOTD:** *"Kalau storage penuh, user bilang hapus log. Kalau log hilang, user bilang cari log."*  

---

## **10. Apa tools untuk keamanan dan compliance?**
1. **Security Tools:**  
   - [**Falco:**](https://falco.org/) Melacak aktivitas mencurigakan di Kubernetes.  
   - [**Keycloak:**](https://www.keycloak.org/) Untuk IAM atau autentikasi dan SSO.  
   - [**Wazuh:**](https://wazuh.com/) Untuk monitoring keamanan.
   - [**Trivy**](https://trivy.dev/) Untuk lihat aplikasimu pakai dependency yang berbahaya atau tidak.
   - [**Sonarqube**](https://www.sonarsource.com/products/sonarqube/downloads/) Untuk cek kodingan si developer bermasalah atau enggak! (Bahasa kekiniannya SAST).
   - [**Nuclei**](https://github.com/projectdiscovery/nuclei) Buat scan keamanan servermu dari perspektif user
2. **Compliance:**  
   - Pastikan memenuhi standar. Minimal [CIS](https://www.cisecurity.org/cis-benchmarks)  

**QOTD:** *"Kalau security diabaikan, server aman. Aman buat diretas.!"*  

---

## **11. Bagaimana tentang cloud, virtualisasi dan container orchestration?**
1. **Virtualisasi:**  
   - Gunakan **Proxmox**, **CloudStack**, atau **OpenStack** untuk manajemen VM.  
2. **Container Orchestration:**  
   - **Kubernetes** untuk orkestrasi container.  
   - [**Nomad**](https://www.nomadproject.io/) Alternatif ringan kalau Kubernetes bikin pusing.
   - [**OKD**](https://okd.io/) Gratisan Redhat karena Openshift berbayar.
3. **Public Cloud:**
   - Belajar AWS, GCP, atau Azure. Kalau cloud gratis habis, balik aja ke baremetal.

**QOTD:** *"Kalau Kubernetes crash, reboot. Kalau masih crash, reboot admin."*  

---

## **12. Apa proyek beginner-friendly buat DevOps?**
- **Setup Web Server**: Pasang Nginx, buat Hello World, terus bilang ke dunia kamu DevOps. :'(
- **Dockerize Aplikasi**: Bikin container dari aplikasi kecil yang kamu buat.
- **Setup CI/CD Pipeline**: Mulai dari GitHub Actions. Jangan lupa test script-mu sendiri.
- **Docker Registry**: Install [Harbor](https://goharbor.io/) atau [quay](https://quay.io/) dan simpan Docker image buatan sendiri. (Kalau udah berduit pakai JFrog)
- **Monitoring Dasar**: Pasang Grafana + Prometheus buat mantau CPU/RAM, Network, Storage dan Aktivitas Pengguna (siapa yang login dan berapa banyak gagal login.). Terus bikin dashboard yang bikin senior kagum. :p
- **Otomasi Infrastruktur**: Deploy 3 server/VM sekaligus dengan [Ansible](https://github.com/ansible/awx).

**QOTD:** *Kalau aplikasi crash, salah DevOps. Kalau jalan lancar, developer yang dapat pujian...*  

---
## **13. Pesan Penyemangat untuk Pemula!**
- Semua master dulu juga bingung bedanya `kill` dan `kill -9`.  
- Debugging itu perjalanan spiritual, nikmati prosesnya.  
- Kalau semua gagal, reboot server. Kalau masih gagal, reboot dirimu sendiri.  

**QOTD:** *Jika Linux adalah dewa, maka `man` adalah kitab sucinya. Tapi siapa juga yang baca?*  

---

## **14. Siapa role model buat Engineer!**
- **Linus Torvalds**: Nggak kenal Linus? Keluar aja dari dunia ini. 
- **Brendan Gregg**: Si tukang sulap, alasan Kenapa kamu nonton netflix lancar. 
- **Vinton Gray Cerf**: Nggk ada dia nggk online kita bro!.
- **Theo de Raadt**: Bagaimana kita SSH ke server kalau orang ini nggk lahir?
- **Marshall Kirk McKusick**: Lewat bukunya [`The Design and Implementation of the FreeBSD Operating System`](https://coconut.or.id/assets/publications/The_Design_and_Implementation_of_the_FreeBSD_Operating_System_2nd%20Edition.pdf), dia adalah alasan kenapa sistem operasi ini lebih stabil daripada kehidupan DevOps.

**QOTD:** *Kalau server crash, itu salah user. Kalau nggak ada user, itu salah kita..*  

---

## **15. Saya stuck, mau berhenti aja. Gimana dong?**
Haha, nggak boleh nyerah, bos! Coba tips ini:
- **Baca log dengan penuh rasa syukur**: Log bukan musuh, tapi buku harian server.
- **Break sebentar**: Makan indomie dulu, server-nya nggak akan meledak (mungkin).
- **Tanya komunitas**: Ada Slack, Discord, atau group tele di COCONUT buat curhat (Seniormu banyak yg expert). Ingat, kamu nggak sendirian.

**QOTD:** *Di balik setiap sistem yang stabil, ada DevOps yang begadang sambil ngopi.*  

---

*Semoga hidupmu penuh YAML error yang bisa dijelaskan! Entar juga jadi sombong kalau udah jago! :p* Ciyaoo
