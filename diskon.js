<html>
<head>
	<meta charset="UTF-8">
	<title>Perhitungan Diskon Javascript</title>
</head>
<body>
	<script>
		function diskon(hargaAwal){
			var diskon;
			diskon = 0.5 * hargaAwal;
			hargaDiskon = hargaAwal - diskon;
			return hargaDiskon;
		}
		var harga = prompt("Masukan Harga : Rp. ");
		document.write("Harga Setelah diskon 50% Menjadi : Rp. " + diskon(harga));
	</script>
</body>
</html>