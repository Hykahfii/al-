var wms_layers = [];

var format_LapakGIS_Batas_Kecamatan_2024_0 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kecamatan_2024_0 = format_LapakGIS_Batas_Kecamatan_2024_0.readFeatures(json_LapakGIS_Batas_Kecamatan_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kecamatan_2024_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIS_Batas_Kecamatan_2024_0.addFeatures(features_LapakGIS_Batas_Kecamatan_2024_0);
var lyr_LapakGIS_Batas_Kecamatan_2024_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIS_Batas_Kecamatan_2024_0, 
                style: style_LapakGIS_Batas_Kecamatan_2024_0,
                popuplayertitle: 'LapakGIS_Batas_Kecamatan_2024',
                interactive: true,
                title: '<img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0.png" /> LapakGIS_Batas_Kecamatan_2024'
            });

lyr_LapakGIS_Batas_Kecamatan_2024_0.setVisible(true);
var layersList = [lyr_LapakGIS_Batas_Kecamatan_2024_0];
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Jumlah Penduduk (Ribu)': 'Jumlah Penduduk (Ribu)', 'Laju Pertumbuhan Penduduk per Tahun': 'Laju Pertumbuhan Penduduk per Tahun', 'Persentase Penduduk': 'Persentase Penduduk', 'Kepadatan Penduduk per km persegi (Km2)': 'Kepadatan Penduduk per km persegi (Km2)', 'Rasio Jenis Kelamin Penduduk': 'Rasio Jenis Kelamin Penduduk', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Jumlah Penduduk (Ribu)': 'TextEdit', 'Laju Pertumbuhan Penduduk per Tahun': 'TextEdit', 'Persentase Penduduk': 'TextEdit', 'Kepadatan Penduduk per km persegi (Km2)': 'Range', 'Rasio Jenis Kelamin Penduduk': 'TextEdit', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Jumlah Penduduk (Ribu)': 'no label', 'Laju Pertumbuhan Penduduk per Tahun': 'no label', 'Persentase Penduduk': 'no label', 'Kepadatan Penduduk per km persegi (Km2)': 'no label', 'Rasio Jenis Kelamin Penduduk': 'no label', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});