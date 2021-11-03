const args = process.argv.slice(2);
for (const a of args)
{
  console.log(Number(a))
  if (Number(a) && (Number(a) >= 0))
  {
    setTimeout(()=>{
      process.stdout.write('\x07');
      console.log('\n');
    },Number(a)*1000);
  };
};