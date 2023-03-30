import { React, useEffect, useState } from 'react'
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import ComboDemo from './Dashboard/PremierLeagueData/DemoChart5';

const BreastCancerModel = () => {


  const [response, setResponse] = useState("");
  const [data, setData] = useState();
  const [diagnosis, setdiagnosis] = useState();
  const [chartData, setchartData] = useState();

  const [dataPoints, setcdataPoints] = useState();

  const handleSubmit = async () => {
    window.scrollTo(0, 0);
    const url = "https://dlevdui7c7.execute-api.ap-south-1.amazonaws.com/PROD/api-cancer-pred-model/";
    const data = {
      data: `${radiusMean},${textureMean},${perimeterMean},${areaMean},${smoothnessMean},${compactnessMean},${concavityMean},${concavePointsMean},${symmetryMean},${fractalDimensionMean},${radiusSe},${textureSe},${perimeterSe},${areaSe},${smoothnessSe},${compactnessSe},${concavitySe},${concavePointsSe},${symmetrySe},${fractalDimensionSe},${radiusWorst},${textureWorst},${perimeterWorst},${areaWorst},${smoothnessWorst},${compactnessWorst},${concavityWorst},${concavePointsWorst},${symmetryWorst},${fractalDimensionWorst}`
    };
    setData(data)
    const response = "Malignant"; // replace with API response
    const dataPoints = data.data.split(',').map(Number); // convert comma-separated string to array of numbers
    setcdataPoints(dataPoints)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const res = await fetch(url, requestOptions);
    const json = await res.json();
    setdiagnosis(json === "M" ? "Breast Cancer" : "Benign")

    setResponse(json);
    console.log(json, 'Getting from API Breast Cancer Prediction');

    setchartData({
      labels: ["Radius Mean", "Texture Mean", "Perimeter Mean", "Area Mean", "Smoothness Mean", "Compactness Mean", "Concavity Mean", "Concave Points Mean", "Symmetry Mean", "Fractal Dimension Mean", "Radius SE", "Texture SE", "Perimeter SE", "Area SE", "Smoothness SE", "Compactness SE", "Concavity SE", "Concave Points SE", "Symmetry SE", "Fractal Dimension SE", "Radius Worst", "Texture Worst", "Perimeter Worst", "Area Worst", "Smoothness Worst", "Compactness Worst", "Concavity Worst", "Concave Points Worst", "Symmetry Worst", "Fractal Dimension Worst"],
      datasets: [
        {
          label: 'Data Points',
          data: dataPoints,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          lineTension: 0.1
        }
      ]
    });
  };




  const [radiusMean, setRadiusMean] = useState(0);
  const [textureMean, setTextureMean] = useState(0);
  const [perimeterMean, setPerimeterMean] = useState(0);
  const [areaMean, setAreaMean] = useState(0);
  const [smoothnessMean, setSmoothnessMean] = useState(0);
  const [compactnessMean, setCompactnessMean] = useState(0);
  const [concavityMean, setConcavityMean] = useState(0);
  const [concavePointsMean, setConcavePointsMean] = useState(0);
  const [symmetryMean, setSymmetryMean] = useState(0);
  const [fractalDimensionMean, setFractalDimensionMean] = useState(0);
  const [radiusSe, setRadiusSe] = useState(0);
  const [textureSe, setTextureSe] = useState(0);
  const [perimeterSe, setPerimeterSe] = useState(0);
  const [areaSe, setAreaSe] = useState(0);
  const [smoothnessSe, setSmoothnessSe] = useState(0);
  const [compactnessSe, setCompactnessSe] = useState(0);
  const [concavitySe, setConcavitySe] = useState(0);
  const [concavePointsSe, setConcavePointsSe] = useState(0);
  const [symmetrySe, setSymmetrySe] = useState(0);
  const [fractalDimensionSe, setFractalDimensionSe] = useState(0);
  const [radiusWorst, setRadiusWorst] = useState(0);
  const [textureWorst, setTextureWorst] = useState(0);
  const [perimeterWorst, setPerimeterWorst] = useState(0);
  const [areaWorst, setAreaWorst] = useState(0);
  const [smoothnessWorst, setSmoothnessWorst] = useState(0);
  const [compactnessWorst, setCompactnessWorst] = useState(0);
  const [concavityWorst, setConcavityWorst] = useState(0);
  const [concavePointsWorst, setConcavePointsWorst] = useState(0);
  const [symmetryWorst, setSymmetryWorst] = useState(0);
  const [fractalDimensionWorst, setFractalDimensionWorst] = useState(0);


  return (
    <div className="container mt-5">
      <div className="row p-4 shadow p-5">
        <div className="col-sm-12 col-md-6 p-5">
          <h2 className='mb-4'>Submit Values</h2>
          <div>
            <h3>radius mean</h3>
            <InputText value={radiusMean} onChange={(e) => setRadiusMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={1} min={7} max={29} value={radiusMean} onChange={(e) => setRadiusMean(e.value)} className="" />
          </div>
          <div>
            <h3>texture mean</h3>
            <InputText value={textureMean} onChange={(e) => setTextureMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={2} min={9.71} max={39.28} value={textureMean} onChange={(e) => setTextureMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>perimeter mean</h3>
            <InputText value={perimeterMean} onChange={(e) => setPerimeterMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={5} min={43.79} max={188.5} value={perimeterMean} onChange={(e) => setPerimeterMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>area mean</h3>
            <InputText value={areaMean} onChange={(e) => setAreaMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={300} min={143.5} max={2501.0} value={areaMean} onChange={(e) => setAreaMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>smoothness mean</h3>
            <InputText value={smoothnessMean} onChange={(e) => setSmoothnessMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.05263} max={0.1634} value={smoothnessMean} onChange={(e) => setSmoothnessMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>compactness mean</h3>
            <InputText value={compactnessMean} onChange={(e) => setCompactnessMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.01938} max={0.3454} value={compactnessMean} onChange={(e) => setCompactnessMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>concavity mean</h3>
            <InputText value={concavityMean} onChange={(e) => setConcavityMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.0} max={0.4275} value={concavityMean} onChange={(e) => setConcavityMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>concave points mean</h3>
            <InputText value={concavePointsMean} onChange={(e) => setConcavePointsMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.0} max={0.2012} value={concavePointsMean} onChange={(e) => setConcavePointsMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>symmetry mean</h3>
            <InputText value={symmetryMean} onChange={(e) => setSymmetryMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.106} max={0.304} value={symmetryMean} onChange={(e) => setSymmetryMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>Fractal Dimension Mean</h3>
            <InputText value={fractalDimensionMean} onChange={(e) => setFractalDimensionMean(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.04996} max={0.09744} value={fractalDimensionMean} onChange={(e) => setFractalDimensionMean(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>Radius SE</h3>
            <InputText value={radiusSe} onChange={(e) => setRadiusSe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.1} min={0.1115} max={2.873} value={radiusSe} onChange={(e) => setRadiusSe(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>Texture SE</h3>
            <InputText value={textureSe} onChange={(e) => setTextureSe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.1} min={0.3602} max={4.885} value={textureSe} onChange={(e) => setTextureSe(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>Perimeter SE</h3>
            <InputText value={perimeterSe} onChange={(e) => setPerimeterSe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.8} min={0.757} max={21.98} value={perimeterSe} onChange={(e) => setPerimeterSe(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>Area SE</h3>
            <InputText value={areaSe} onChange={(e) => setAreaSe(e.target.value)} className="w-100 mb-3" />
            <Slider step={10} min={6.802} max={542.2} value={areaSe} onChange={(e) => setAreaSe(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>smoothness se</h3>
            <InputText value={smoothnessSe} onChange={(e) => setSmoothnessSe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.001} min={0.001713} max={0.03113} value={smoothnessSe} onChange={(e) => setSmoothnessSe(e.value)} className="w-100 mb-3" />
          </div>

          <div>
            <h3>compactness se</h3>
            <InputText value={compactnessSe} onChange={(e) => setCompactnessSe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.001} min={0.002252} max={0.1354} value={compactnessSe} onChange={(e) => setCompactnessSe(e.value)} className="w-100 mb-3" />
          </div>

          <div>
            <h3>concavity se</h3>
            <InputText value={concavitySe} onChange={(e) => setConcavitySe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.0} max={0.396} value={concavitySe} onChange={(e) => setConcavitySe(e.value)} className="w-100 mb-3" />
          </div>

          <div>
            <h3>concave points se</h3>
            <InputText value={concavePointsSe} onChange={(e) => setConcavePointsSe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.001} min={0.0} max={0.05279} value={concavePointsSe} onChange={(e) => setConcavePointsSe(e.value)} className="w-100 mb-3" />
          </div>

          <div>
            <h3>symmetry se</h3>
            <InputText value={symmetrySe} onChange={(e) => setSymmetrySe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.0001} min={0.007882} max={0.007882} value={symmetrySe} onChange={(e) => setSymmetrySe(e.value)} className="w-100 mb-3" />
          </div>

          <div>
            <h3>fractal dimension se</h3>
            <InputText value={fractalDimensionSe} onChange={(e) => setFractalDimensionSe(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.0001} min={0.0008948} max={0.02984} value={fractalDimensionSe} onChange={(e) => setFractalDimensionSe(e.value)} className="w-100 mb-3" />
          </div>

          <div>
            <h3>radius worst</h3>
            <InputText value={radiusWorst} onChange={(e) => setRadiusWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={2} min={7.93} max={36.04} value={radiusWorst} onChange={(e) => setRadiusWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>texture worst</h3>
            <InputText value={textureWorst} onChange={(e) => setTextureWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={3} min={12.02} max={49.54} value={textureWorst} onChange={(e) => setTextureWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>perimeter worst</h3>
            <InputText value={perimeterWorst} onChange={(e) => setPerimeterWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={3} min={50.41} max={251.2} value={perimeterWorst} onChange={(e) => setPerimeterWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>area worst</h3>
            <InputText value={areaWorst} onChange={(e) => setAreaWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={300} min={185.2} max={4254.0} value={areaWorst} onChange={(e) => setAreaWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>smoothness worst</h3>
            <InputText value={smoothnessWorst} onChange={(e) => setSmoothnessWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.07117} max={0.2226} value={smoothnessWorst} onChange={(e) => setSmoothnessWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>compactness worst</h3>
            <InputText value={compactnessWorst} onChange={(e) => setCompactnessWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.02729} max={1.058} value={compactnessWorst} onChange={(e) => setCompactnessWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>concavity worst</h3>
            <InputText value={concavityWorst} onChange={(e) => setConcavityWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.1} min={0.0} max={1.252} value={concavityWorst} onChange={(e) => setConcavityWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>concave points worst</h3>
            <InputText value={concavePointsWorst} onChange={(e) => setConcavePointsWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.0} max={0.291} value={concavePointsWorst} onChange={(e) => setConcavePointsWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>symmetry worst</h3>
            <InputText value={symmetryWorst} onChange={(e) => setSymmetryWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.1565} max={0.6638} value={symmetryWorst} onChange={(e) => setSymmetryWorst(e.value)} className="w-100 mb-3" />
          </div>
          <div>
            <h3>fractal dimension worst</h3>
            <InputText value={fractalDimensionWorst} onChange={(e) => setFractalDimensionWorst(e.target.value)} className="w-100 mb-3" />
            <Slider step={0.01} min={0.05504} max={0.2075} value={fractalDimensionWorst} onChange={(e) => setFractalDimensionWorst(e.value)} className="w-100 mb-3" />
          </div>

          <Button className="col-sm-12 col-md-6  mt-3" onClick={handleSubmit}>Predict Breast Cancer</Button>



        </div>
        <div className="col-sm-12 col-md-6 p-5">
          <h2>Prediction</h2>
          <h1>{diagnosis}</h1>
          {dataPoints && <ComboDemo data={dataPoints} />}
        </div>
      </div>
    </div>
  )
}

export default BreastCancerModel
