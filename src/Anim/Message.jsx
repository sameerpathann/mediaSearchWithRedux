const Message = ({ message }) => {
  return (
    <div className="h-[59.9vh] flex items-center justify-center overflow-hidden">
      <h1 className="text-4xl md:text-4xl font-bold text-blue-700 animate-pulse tracking-wider">
        {message}
      </h1>
    </div>
  );
};

export default Message;
