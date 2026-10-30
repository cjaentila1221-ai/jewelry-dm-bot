   const key = process.env.ANTHROPIC_API_KEY;
   console.log("Length:", key?.length);
   console.log("Starts with:", key?.slice(0, 13));
   console.log("Ends with:", key?.slice(-3));