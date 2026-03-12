const Heading = ({ text }: { text: string }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold  text-primary dark:text-white">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
