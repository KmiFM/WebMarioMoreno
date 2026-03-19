const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const envFile = fs.readFileSync('.env.local', 'utf8');
let URL = '';
let KEY = '';
envFile.split('\n').forEach(line => {
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) URL = line.split('=')[1].trim();
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) KEY = line.split('=')[1].trim();
});

const supabase = createClient(URL, KEY);

async function seed() {
  console.log("Seeding Database...");
  const { error: err1 } = await supabase.from('portfolio_items').insert([
    {
      title: 'Emergency Mechanism (The Living Reflection)',
      description: 'Marcos, espejos y mecanismos de movimiento (materiales reciclados).',
      category: 'arte',
      year: '2024',
      dimensions: '180 x 100 x 180 cm',
      exhibition: 'Galpón 20.99'
    },
    {
      title: 'Proyecto Residencia Norte',
      description: 'Diseño espacial y planimetría para vivienda unifamiliar.',
      category: 'arquitectura',
      year: '2023',
    }
  ]);
  
  if (err1) console.error("Error inserting portfolio:", err1);

  const { error: err2 } = await supabase.from('blog_posts').insert([
    {
      slug: 'reflexiones-sobre-color',
      title: 'Reflexiones sobre el Color en el Espacio',
      content: 'Este es el contenido inicial del blog guardado en tu propia base de datos de Supabase. A partir de ahora todas las entradas se cargarán directamente desde aquí.',
      category: 'arte'
    }
  ]);
  if (err2) console.error("Error inserting blog posts:", err2);

  console.log("Seeding complete!");
}
seed();
