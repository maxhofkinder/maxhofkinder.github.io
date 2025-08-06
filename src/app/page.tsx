import fs from 'fs';
import path from 'path';

export default function Home() {
  // Read .txt files from public/infobox
  let infoboxes: { title: string; content: string }[] = [];
  try {
    const infoboxDir = path.join(process.cwd(), 'public', 'infobox');
    const files = fs.existsSync(infoboxDir) ? fs.readdirSync(infoboxDir) : [];
    infoboxes = files
      .filter((file) => file.endsWith('.txt'))
      .map((file) => {
        const rawContent = fs.readFileSync(path.join(infoboxDir, file), 'utf8');
        const [firstLine, ...rest] = rawContent.split(/\r?\n/);
        return {
          title: firstLine || file.replace(/\.txt$/, ''),
          content: rest.join('\n').trim(),
        };
      });
  } catch (e) {
    // ignore errors, show nothing
  }

  return (
    <div className="space-y-8">
      <img src="img/logo.png" alt="" className="mx-auto w-1/2 md:w-1/4 mt-8" />
      <div className="w-fit mx-auto">
        <p className="text-2xl md:text-3xl text-center font-bold">
          <span className="text-[#f39535]">Wir geben Halt und Herz</span><br/>
          <span className="text-[#52b155]">für starke Kinder</span><br />
          <span className="text-[#00b0e2]">mit leuchtender Fantasie!</span>
          <span>Testing</span>
        </p>
      </div>
      {infoboxes.length > 0 && (
        <div className="space-y-4">
          {infoboxes.map((box, idx) => (
            <div key={box.title + idx} className="card-gradient rounded-md p-4 border-0 border-t-0 border-l-0 mx-4">
              <h3 className="font-bold mb-2">{box.title}</h3>
              <p className="whitespace-pre-line">{box.content}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}