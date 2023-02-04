<?php

header('Content-Type: application/json');

$dates = [];
$temperatures = [];
$humidities = [];
$soilMoistures = [];

$currentDate = new DateTime();

for ($i = 0; $i < 7; $i++) {
  $dates[] = $currentDate->format('Y-m-d');
  $temperatures[] = rand(20, 30);
  $humidities[] = rand(50, 80);
  $soilMoistures[] = rand(10, 90);

  $currentDate->modify('-1 day');
}

$data = [
  'dates' => array_reverse($dates),
  'temperatures' => array_reverse($temperatures),
  'humidities' => array_reverse($humidities),
  'soilMoistures' => array_reverse($soilMoistures)
];

echo json_encode($data);

