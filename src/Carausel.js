
import Carousel from "./components/carousel";

export default function App() {
  const slides = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
    "https://via.placeholder.com/800x400?text=Slide+4",
    "https://via.placeholder.com/800x400?text=Slide+5",
    "https://via.placeholder.com/800x400?text=Slide+6",
  ].map((url, index) => {
    return (
      <div className="border border-black bg-cyan-200 h-[140px]">
        {index}
      </div>
    )
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Carousel slideWidth="30%">{slides}</Carousel>
    </div>
  );
}