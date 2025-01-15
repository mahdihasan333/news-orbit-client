const ArticleDetails = () => {
  


  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-4">title</h1>
      
      {/* Publisher and Views */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
        <span>Publisher: <strong>publisher</strong></span>
        <span>Views: <strong>views</strong></span>
      </div>

      {/* Article Image */}
      <div className="mb-6">
        <img
          src='https://ibb.co.com/sHSrswx'
          alt=''
          className="w-full max-h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Long Description */}
      <div className="text-gray-800 leading-relaxed">
        <p>description</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
