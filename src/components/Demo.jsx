import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

const media = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Architecture',
  },
  {
    id: 2,
    type: 'video',
    url: 'https://videos.pexels.com/video-files/3573382/3573382-sd_640_360_24fps.mp4',
    title: 'Urban Design',
    thumbnail: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Interior Space',
  },
  {
    id: 4,
    type: 'video',
    url: 'https://videos.pexels.com/video-files/7579299/7579299-sd_640_360_25fps.mp4',
    title: 'Contemporary Living',
    thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];


export default function ImageGallery() {
  const [selectedMedia, setSelectedMedia] = useState(media[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
      setSelectedMedia(media[(currentIndex + 1) % media.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleThumbnailClick = (item) => {
    setSelectedMedia(item);
    setCurrentIndex(media.findIndex(m => m.id === item.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
              {media.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleThumbnailClick(item)}
                  className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedMedia.id === item.id
                      ? 'ring-4 ring-blue-500 shadow-xl scale-105'
                      : 'ring-2 ring-transparent hover:ring-slate-300 hover:shadow-lg hover:scale-105'
                  }`}
                >
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.url}
                    alt={item.title}
                    className="w-24 h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>

            <div className="flex-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2 group cursor-pointer">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-[600px] object-cover rounded-xl"
                  />
                ) : (
                  <>
                    <video
                      src={selectedMedia.url}
                      className="w-full h-[600px] object-cover rounded-xl"
                      autoPlay
                      loop
                      muted
                    />
                    <div
                      onClick={() => setPlayingVideo(selectedMedia)}
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      <Play className="w-16 h-16 text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                    </div>
                  </>
                )}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {selectedMedia.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {playingVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setPlayingVideo(null)}
        >
          <div className="relative w-full max-w-4xl mx-auto px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 shadow-lg"
            >
              <X className="w-6 h-6 text-slate-800" />
            </button>
            <video
              src={playingVideo.url}
              autoPlay
              controls
              className="w-full h-auto rounded-xl shadow-2xl max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
