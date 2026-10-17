
'use client';

import { FormEvent, useState } from 'react';

type Plan = 'Mensual' | 'Anual';

const WHATSAPP = '584143065287';

const plans = {
  Mensual: {
    price: 15,
    period: 'mes',
    description: 'Flexibilidad para comenzar',
  },
  Anual: {
    price: 150,
    period: 'año',
    description: '12 meses de gestión comercial',
  },
};

const features = [
  {
    icon: '▦',
    title: 'Punto de venta',
    description:
      'Registra ventas y gestiona diferentes métodos de pago desde una interfaz organizada.',
    number: '01',
  },
  {
    icon: '◫',
    title: 'Inventario inteligente',
    description:
      'Organiza tus productos, precios, categorías y existencias en un solo lugar.',
    number: '02',
  },
  {
    icon: '◷',
    title: 'Control de caja',
    description:
      'Consulta aperturas, cierres y movimientos de caja para mantener tus operaciones bajo control.',
    number: '03',
  },
  {
    icon: '▤',
    title: 'Reportes de ventas',
    description:
      'Obtén información de tus operaciones para tomar decisiones comerciales con más claridad.',
    number: '04',
  },
  {
    icon: '♙',
    title: 'Clientes y pedidos',
    description:
      'Centraliza la información de tus clientes y facilita el seguimiento de pedidos.',
    number: '05',
  },
  {
    icon: '⚙',
    title: 'Usuarios y permisos',
    description:
      'Administra accesos y organiza las responsabilidades de tu equipo según las funciones disponibles.',
    number: '06',
  },
];

export default function PosEnterpriseLanding() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [business, setBusiness] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reference, setReference] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const openPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowPaymentDetails(false);
    setReference('');
    setPaymentDate('');
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setShowPaymentDetails(false);
  };

  const askQuestion = () => {
    const message =
      'Hola, quiero recibir información sobre POS Enterprise y sus planes.';
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const requestDemo = () => {
    const message =
      'Hola, quiero solicitar una demostración de POS Enterprise. ¿Podrían orientarme?';
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const submitContract = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedPlan) return;

    const plan = plans[selectedPlan];

    const message = [
      'Hola, deseo contratar POS Enterprise.',
      '',
      `Plan: ${selectedPlan}`,
      `Precio: $${plan.price} USD por ${plan.period}`,
      `Negocio: ${business}`,
      `Nombre: ${fullName}`,
      `Teléfono: ${phone}`,
      `Correo: ${email || 'No indicado'}`,
      `Referencia de pago: ${reference || 'Pendiente de indicar'}`,
      `Fecha de pago: ${paymentDate || 'Pendiente de indicar'}`,
      '',
      'Solicito la verificación del pago y la coordinación de la activación.',
      'Adjuntaré el comprobante de pago directamente en este chat.',
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Navegación */}
      <header className="relative z-20 border-b border-slate-100 bg-white/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-xl font-black text-white shadow-lg shadow-blue-200">
              P
            </span>
            <span>
              <span className="block text-lg font-black tracking-tight">
                POS<span className="text-blue-700"> Enterprise</span>
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Gestión comercial
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a className="transition hover:text-blue-700" href="#funciones">
              Funciones
            </a>
            <a className="transition hover:text-blue-700" href="#beneficios">
              Beneficios
            </a>
            <a className="transition hover:text-blue-700" href="#planes">
              Planes
            </a>
          </nav>

          <a
            href="/login"
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold transition hover:border-blue-300 hover:bg-blue-50"
          >
            Iniciar sesión <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-[-15%] h-[480px] w-[480px] rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute bottom-0 left-[-10%] h-64 w-64 rounded-full bg-sky-100/70 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:py-24 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              TECNOLOGÍA PARA TU NEGOCIO
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Tu negocio merece una forma{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                más inteligente
              </span>{' '}
              de trabajar.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Controla ventas, inventario, caja, clientes y reportes desde un
              sistema diseñado para ayudarte a organizar tu operación comercial.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#planes"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-700 px-7 py-4 font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Elegir mi plan <span aria-hidden="true">→</span>
              </a>
              <button
                onClick={requestDemo}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <span aria-hidden="true">▷</span> Solicitar demostración
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Planes claros
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Atención por WhatsApp
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Acceso desde navegador
              </span>
            </div>
          </div>

          {/* Panel visual ilustrativo */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-3 -top-5 h-28 w-28 rounded-3xl bg-sky-200/70 blur-2xl" />
            <div className="absolute -bottom-6 -left-5 h-32 w-32 rounded-full bg-blue-300/40 blur-2xl" />

            <div className="relative rotate-1 rounded-[30px] border border-white bg-white p-3 shadow-2xl shadow-blue-200/70">
              <div className="overflow-hidden rounded-[23px] border border-slate-100 bg-slate-50">
                <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-700 text-sm font-black text-white">
                      P
                    </div>
                    <div>
                      <p className="text-sm font-extrabold">Panel comercial</p>
                      <p className="text-[10px] text-slate-400">
                        VISTA ILUSTRATIVA
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700">
                    ● Panel de ejemplo
                  </span>
                </div>

                <div className="grid grid-cols-[75px_1fr] sm:grid-cols-[100px_1fr]">
                  <aside className="space-y-4 bg-slate-950 px-3 py-6 sm:px-4">
                    <div className="mb-8 h-2 w-10 rounded-full bg-blue-400" />
                    {['▦', '▣', '◷', '▤', '♙'].map((item, index) => (
                      <div
                        key={index}
                        className={`flex h-10 items-center justify-center rounded-xl text-lg ${
                          index === 0
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-500'
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </aside>

                  <div className="min-w-0 p-4 sm:p-6">
                    <p className="text-xs font-semibold text-slate-500">
                      Resumen de tu negocio
                    </p>
                    <h3 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                      Todo bajo control.
                    </h3>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-slate-500 sm:text-xs">
                            Ventas
                          </span>
                          <span className="text-blue-600">↗</span>
                        </div>
                        <p className="mt-3 text-xl font-black sm:text-2xl">
                          POS
                        </p>
                        <div className="mt-3 h-1.5 rounded-full bg-blue-100">
                          <div className="h-1.5 w-3/4 rounded-full bg-blue-600" />
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-slate-500 sm:text-xs">
                            Inventario
                          </span>
                          <span className="text-emerald-600">✓</span>
                        </div>
                        <p className="mt-3 text-xl font-black sm:text-2xl">
                          Stock
                        </p>
                        <div className="mt-3 h-1.5 rounded-full bg-emerald-100">
                          <div className="h-1.5 w-2/3 rounded-full bg-emerald-500" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-extrabold">
                            Operación comercial
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            Módulos de gestión
                          </p>
                        </div>
                        <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                          POS
                        </span>
                      </div>
                      <div className="mt-5 flex h-24 items-end gap-2 sm:h-28">
                        {[35, 55, 43, 72, 49, 85, 64, 94, 70, 80, 58, 90].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-md bg-gradient-to-t from-blue-700 to-sky-400"
                              style={{ height: `${height}%`, opacity: 0.55 + index * 0.035 }}
                            />
                          ),
                        )}
                      </div>
                      <div className="mt-3 flex justify-between text-[10px] text-slate-400">
                        <span>Organización</span>
                        <span>Control</span>
                        <span>Información</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-700">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-extrabold">Más organizado</p>
                  <p className="text-xs text-slate-500">
                    Tu operación en un solo lugar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franja de capacidades */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 lg:px-8">
          {[
            ['01', 'Ventas'],
            ['02', 'Inventario'],
            ['03', 'Caja'],
            ['04', 'Reportes'],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-3">
              <span className="text-xs font-black tracking-widest text-blue-600">
                {number}
              </span>
              <span className="font-bold text-slate-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Funciones */}
      <section id="funciones" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">
              Una plataforma, más control
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Las herramientas que tu negocio necesita.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Centraliza las tareas comerciales importantes y trabaja con una
              visión más clara de tus operaciones.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-black tracking-widest text-slate-200">
                    {feature.number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-extrabold">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-500">
                  {feature.description}
                </p>
                <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-24">
        <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-sky-400">
              Diseñado para crecer contigo
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Menos desorden.
              <br />
              Más claridad para decidir.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-300">
              Una operación comercial bien organizada te ayuda a consultar
              información, mantener tus procesos centralizados y dedicar más
              atención a tus clientes.
            </p>
            <a
              href="#planes"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-sky-100"
            >
              Conocer los planes <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['01', 'Información centralizada', 'Consulta los módulos disponibles desde tu sistema.'],
              ['02', 'Procesos organizados', 'Facilita las tareas habituales de tu operación.'],
              ['03', 'Mejor seguimiento', 'Mantén ventas, caja y productos más organizados.'],
              ['04', 'Atención directa', 'Comunícate por WhatsApp para resolver tus dudas.'],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm"
              >
                <span className="text-sm font-black text-sky-400">
                  / {number}
                </span>
                <h3 className="mt-5 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="planes" className="relative bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">
              Precios transparentes
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Elige cómo quieres comenzar.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Selecciona tu suscripción y continúa con la contratación por
              WhatsApp.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {/* Mensual */}
            <article className="flex flex-col rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9">
              <span className="text-sm font-extrabold text-slate-500">
                PLAN FLEXIBLE
              </span>
              <h3 className="mt-4 text-2xl font-black">Mensual</h3>
              <p className="mt-2 text-sm text-slate-500">
                {plans.Mensual.description}
              </p>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-6xl font-black tracking-[-0.06em]">
                  $15
                </span>
                <span className="pb-2 text-slate-500">USD / mes</span>
              </div>
              <div className="my-8 h-px bg-slate-100" />
              <ul className="flex-1 space-y-4 text-sm text-slate-600">
                {[
                  'Suscripción de un mes',
                  'Módulos de gestión del sistema',
                  'Atención para coordinar la contratación',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-black text-blue-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openPlan('Mensual')}
                className="mt-9 w-full rounded-2xl border-2 border-blue-700 px-6 py-4 font-extrabold text-blue-700 transition hover:bg-blue-50"
              >
                Elegir plan mensual →
              </button>
            </article>

            {/* Anual */}
            <article className="relative flex flex-col overflow-hidden rounded-[28px] border border-blue-700 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-7 text-white shadow-2xl shadow-blue-200/70 transition hover:-translate-y-1 sm:p-9">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-sky-300 px-4 py-2 text-xs font-black uppercase tracking-wider text-blue-950">
                Ahorra $30
              </div>
              <span className="text-sm font-extrabold text-blue-200">
                MEJOR VALOR
              </span>
              <h3 className="mt-4 text-2xl font-black">Anual</h3>
              <p className="mt-2 text-sm text-blue-100">
                {plans.Anual.description}
              </p>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-6xl font-black tracking-[-0.06em]">
                  $150
                </span>
                <span className="pb-2 text-blue-200">USD / año</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-sky-200">
                Equivale a $12,50 al mes
              </p>
              <div className="my-8 h-px bg-white/15" />
              <ul className="flex-1 space-y-4 text-sm text-blue-50">
                {[
                  '12 meses de suscripción',
                  'Módulos de gestión del sistema',
                  'Ahorro de $30 frente al pago mensual',
                  'Atención para coordinar la contratación',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-black text-sky-300">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openPlan('Anual')}
                className="mt-9 w-full rounded-2xl bg-white px-6 py-4 font-extrabold text-blue-800 shadow-lg transition hover:bg-sky-100"
              >
                Elegir plan anual →
              </button>
            </article>
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-500">
            La activación se coordina después de verificar el pago. Consulta
            por WhatsApp cualquier duda antes de contratar.
          </p>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">
              Resolvemos tus dudas
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {[
              [
                '¿Cómo contrato POS Enterprise?',
                'Selecciona un plan, revisa los datos de pago en el modal y completa el formulario. WhatsApp se abrirá con tu solicitud preparada.',
              ],
              [
                '¿Cómo envío el comprobante?',
                'Cuando se abra WhatsApp, envía el mensaje y adjunta el comprobante de pago directamente en ese chat.',
              ],
              [
                '¿La activación es automática?',
                'No. El pago se verifica manualmente y después se coordina la activación contigo.',
              ],
              [
                '¿Puedo solicitar una demostración?',
                'Sí. Utiliza el botón de demostración para consultar por WhatsApp y coordinar el acceso disponible.',
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                  {question}
                  <span className="text-xl text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[30px] bg-gradient-to-r from-blue-700 to-slate-950 p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-300">
              Da el siguiente paso
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Organiza tu negocio con POS Enterprise.
            </h2>
            <p className="mt-3 text-sm leading-6 text-blue-100">
              Elige tu plan o conversa con nosotros antes de contratar.
            </p>
          </div>
          <button
            onClick={askQuestion}
            className="shrink-0 rounded-2xl bg-white px-6 py-4 font-extrabold text-blue-800 transition hover:bg-sky-100"
          >
            Hablar con un asesor ↗
          </button>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} POS Enterprise. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-5">
            <a className="hover:text-blue-700" href="#planes">
              Planes
            </a>
            <a className="hover:text-blue-700" href="/login">
              Iniciar sesión
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <button
        onClick={askQuestion}
        aria-label="Consultar por WhatsApp"
        title="Consultar por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl shadow-green-900/20 transition hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.47 0 .09 5.37.09 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.98 11.98 0 0 0 5.88 1.49h.01c6.61 0 11.99-5.38 11.99-11.99 0-3.2-1.25-6.21-3.55-8.4ZM12.08 21.8h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.67.96.98-3.58-.24-.37a9.83 9.83 0 0 1-1.51-5.25c0-5.43 4.42-9.85 9.86-9.85a9.8 9.8 0 0 1 6.98 2.89 9.8 9.8 0 0 1 2.88 6.99c0 5.43-4.42 9.85-9.88 9.85Zm5.41-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.57-.49-.49-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </button>

      {/* Modal de contratación: los datos de pago aparecen solo aquí */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="contract-title"
            className="max-h-[94dvh] w-full max-w-2xl overflow-y-auto rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                  POS ENTERPRISE
                </p>
                <h2 id="contract-title" className="mt-1 text-xl font-black">
                  Contrata tu plan
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Cerrar modal"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-slate-950 p-5 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-100">
                      Plan seleccionado
                    </p>
                    <h3 className="mt-1 text-2xl font-black">
                      Plan {selectedPlan}
                    </h3>
                    <p className="mt-2 text-sm text-blue-100">
                      {plans[selectedPlan].description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black">
                      ${plans[selectedPlan].price}
                    </p>
                    <p className="text-xs text-blue-100">
                      USD / {plans[selectedPlan].period}
                    </p>
                  </div>
                </div>
                {selectedPlan === 'Anual' && (
                  <div className="mt-4 inline-flex rounded-full bg-sky-300 px-3 py-1.5 text-xs font-black text-blue-950">
                    Ahorras $30 al año
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold">Datos de Pago Móvil</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Información disponible durante la contratación.
                    </p>
                  </div>
                  <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    BANESCO
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">Banco</p>
                    <p className="mt-1 text-lg font-black">0134</p>
                    <p className="text-xs text-slate-500">Banesco</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">Teléfono</p>
                    <p className="mt-1 break-words text-base font-black">
                      04143065287
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">Cédula</p>
                    <p className="mt-1 text-lg font-black">14972818</p>
                  </div>
                </div>

                <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-900">
                  Antes de pagar, confirma que los datos y el monto sean
                  correctos. La activación no es automática: el pago debe ser
                  verificado manualmente.
                </p>
              </div>

              {!showPaymentDetails ? (
                <button
                  type="button"
                  onClick={() => setShowPaymentDetails(true)}
                  className="w-full rounded-xl border border-blue-200 bg-blue-50 px-5 py-3.5 font-extrabold text-blue-800 transition hover:bg-blue-100"
                >
                  Continuar con mis datos →
                </button>
              ) : (
                <form onSubmit={submitContract} className="space-y-4">
                  <div>
                    <h3 className="font-extrabold">Datos del cliente</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Esta información se incluirá en tu solicitud de WhatsApp.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-bold text-slate-700">
                      Nombre del negocio *
                      <input
                        required
                        autoComplete="organization"
                        value={business}
                        onChange={(event) => setBusiness(event.target.value)}
                        placeholder="Nombre de tu negocio"
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Nombre y apellido *
                      <input
                        required
                        autoComplete="name"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        placeholder="Tu nombre completo"
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Teléfono de contacto *
                      <input
                        required
                        autoComplete="tel"
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="Tu número de contacto"
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Correo electrónico
                      <input
                        autoComplete="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="correo@ejemplo.com"
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Referencia de pago
                      <input
                        value={reference}
                        onChange={(event) => setReference(event.target.value)}
                        placeholder="Número de referencia"
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Fecha de pago
                      <input
                        type="date"
                        value={paymentDate}
                        onChange={(event) => setPaymentDate(event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </label>
                  </div>

                  <p className="rounded-xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">
                    Al continuar, se abrirá WhatsApp con los datos de tu
                    solicitud. Debes enviar el mensaje y adjuntar el
                    comprobante de pago en el chat para que pueda ser verificado.
                  </p>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#25D366] px-5 py-4 font-extrabold text-white shadow-lg shadow-green-100 transition hover:bg-[#1fba59]"
                  >
                    Enviar solicitud por WhatsApp ↗
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
