
'use client';

import { useState, type FormEvent } from 'react';

const WHATSAPP = '584143065287';

const plans = {
  monthly: {
    name: 'Mensual',
    price: 15,
    duration: '1 mes',
  },
  annual: {
    name: 'Anual',
    price: 150,
    duration: '12 meses',
  },
};

type PlanKey = keyof typeof plans;

export default function PosEnterpriseLanding() {
  const [plan, setPlan] = useState<PlanKey>('monthly');
  const [form, setForm] = useState({
    business: '',
    name: '',
    phone: '',
    email: '',
    reference: '',
    paymentDate: '',
  });

  const selectedPlan = plans[plan];

  function contactWhatsApp(message: string) {
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function askQuestion() {
    contactWhatsApp(
      'Hola, estoy interesado en POS Enterprise. ' +
      'Quisiera conocer sus funciones, planes y cómo puedo probar el sistema.'
    );
  }

  function requestDemo() {
    contactWhatsApp(
      'Hola, quiero solicitar acceso a una demostración de POS Enterprise ' +
      'para conocer el sistema antes de contratarlo.'
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      'SOLICITUD DE CONTRATACIÓN — POS ENTERPRISE',
      '',
      `Negocio: ${form.business}`,
      `Responsable: ${form.name}`,
      `Teléfono de contacto: ${form.phone}`,
      `Correo: ${form.email || 'No indicado'}`,
      '',
      `Plan: ${selectedPlan.name}`,
      `Duración: ${selectedPlan.duration}`,
      `Monto: $${selectedPlan.price} USD`,
      `Referencia Pago Móvil: ${form.reference}`,
      `Fecha del pago: ${form.paymentDate || 'No indicada'}`,
      '',
      'Solicito verificar mi pago y coordinar la activación del sistema.',
      'Enviaré el comprobante de pago por este chat.',
    ].join('\n');

    contactWhatsApp(message);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* Navegación */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-200">
              P
            </span>
            <span>
              <span className="block text-lg font-extrabold tracking-tight text-slate-900">
                POS Enterprise
              </span>
              <span className="block text-xs text-slate-500">
                Gestión comercial inteligente
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#funciones" className="transition hover:text-blue-600">
              Funciones
            </a>
            <a href="#planes" className="transition hover:text-blue-600">
              Planes
            </a>
            <a href="#preguntas" className="transition hover:text-blue-600">
              Preguntas frecuentes
            </a>
          </nav>

          <a
            href="/login"
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            Iniciar sesión
          </a>
        </div>
      </header>

      {/* Portada */}
      <section id="inicio" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-sky-50" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Tecnología para gestionar mejor
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Tu negocio bajo control.
              <span className="block text-blue-600">
                Todo en un solo sistema.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Gestiona las operaciones de tu negocio desde POS Enterprise:
              ventas, productos, inventario, caja, clientes y reportes en una
              plataforma diseñada para facilitar tu trabajo diario.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#planes"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Ver planes y contratar
                <span className="ml-2" aria-hidden="true">→</span>
              </a>

              <button
                type="button"
                onClick={requestDemo}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Solicitar una demostración
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span>✓ Planes transparentes</span>
              <span>✓ Atención por WhatsApp</span>
              <span>✓ Pago en USD</span>
            </div>
          </div>

          {/* Vista ilustrativa del sistema */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-100/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-blue-100">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div>
                  <p className="font-bold text-slate-900">Panel de gestión</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Vista ilustrativa de POS Enterprise
                  </p>
                </div>
                <span className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                  Dashboard
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3">
                {[
                  { label: 'Punto de venta', icon: '🛒' },
                  { label: 'Inventario', icon: '📦' },
                  { label: 'Caja', icon: '💳' },
                  { label: 'Clientes', icon: '👥' },
                  { label: 'Reportes', icon: '📊' },
                  { label: 'Pedidos online', icon: '🖥️' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="mt-3 text-sm font-semibold text-slate-800">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mx-5 mb-5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 p-5 text-white">
                <p className="text-sm text-blue-100">
                  Una plataforma para tu negocio
                </p>
                <p className="mt-1 text-xl font-bold">
                  Organiza tu operación diaria
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  Accede a las herramientas disponibles desde una sola
                  interfaz.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <p className="text-xs text-slate-500">Plan mensual desde</p>
              <p className="text-2xl font-black text-slate-900">$15 USD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Funciones */}
      <section id="funciones" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Una gestión más sencilla
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Las herramientas que tu negocio necesita
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Centraliza tus tareas comerciales con los módulos disponibles
              en POS Enterprise.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🛒',
                title: 'Punto de venta',
                text: 'Registra las operaciones de venta desde el sistema.',
              },
              {
                icon: '📦',
                title: 'Productos e inventario',
                text: 'Organiza el catálogo de productos, precios y existencias.',
              },
              {
                icon: '💰',
                title: 'Control de caja',
                text: 'Gestiona la apertura, los movimientos y el cierre de caja según los módulos habilitados.',
              },
              {
                icon: '👥',
                title: 'Clientes y usuarios',
                text: 'Organiza la información de clientes y administra usuarios según los permisos disponibles.',
              },
              {
                icon: '📈',
                title: 'Reportes',
                text: 'Consulta información para dar seguimiento a las operaciones.',
              },
              {
                icon: '🌐',
                title: 'Pedidos online',
                text: 'Gestiona los pedidos online mediante las funciones disponibles en la instalación.',
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Demostración */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-center md:flex-row md:text-left lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Conoce POS Enterprise antes de contratar
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Solicita una demostración y coordina el acceso de prueba con
              nuestro equipo. La demo pública aún no está habilitada.
            </p>
          </div>
          <button
            type="button"
            onClick={requestDemo}
            className="shrink-0 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Solicitar acceso demo
          </button>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Precios claros
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Elige el plan para tu negocio
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Comienza con un mes o ahorra al contratar los 12 meses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
              <p className="font-bold text-slate-700">Plan mensual</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-slate-900">
                  $15
                </span>
                <span className="text-slate-500">USD / mes</span>
              </div>
              <p className="mt-4 leading-7 text-slate-600">
                Ideal para comenzar y evaluar el sistema en tu negocio.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>✓ Acceso al sistema contratado</li>
                <li>✓ Funciones disponibles en tu instalación</li>
                <li>✓ Renovación mensual</li>
              </ul>
              <button
                type="button"
                onClick={() => {
                  setPlan('monthly');
                  document.getElementById('contratar')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="mt-8 w-full rounded-xl border border-blue-200 px-5 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Elegir plan mensual
              </button>
            </article>

            <article className="relative rounded-2xl border-2 border-blue-600 bg-white p-7 shadow-xl shadow-blue-100 sm:p-9">
              <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">
                MEJOR AHORRO
              </span>
              <p className="font-bold text-slate-700">Plan anual</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-slate-900">
                  $150
                </span>
                <span className="text-slate-500">USD / año</span>
              </div>
              <p className="mt-4 leading-7 text-slate-600">
                Un solo pago por 12 meses de servicio.
              </p>
              <div className="mt-4 inline-flex rounded-lg bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">
                Ahorras $30 frente al pago mensual
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>✓ Acceso por 12 meses</li>
                <li>✓ Un solo pago anual</li>
                <li>✓ Mejor precio por mes</li>
              </ul>
              <button
                type="button"
                onClick={() => {
                  setPlan('annual');
                  document.getElementById('contratar')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white transition hover:bg-blue-700"
              >
                Elegir plan anual
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Contratación y Pago Móvil */}
      <section id="contratar" className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Contratación
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              Da el siguiente paso con tu negocio
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Selecciona tu plan, completa tus datos y realiza el Pago Móvil.
              Al enviar el formulario, WhatsApp abrirá un mensaje con tu
              solicitud para que puedas continuar con la verificación.
            </p>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900">
                Datos para Pago Móvil
              </h3>
              <p className="mt-4 text-sm text-slate-500">Banco</p>
              <p className="font-semibold text-slate-900">
                Banesco · Código 0134
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Teléfono del beneficiario
              </p>
              <p className="font-semibold text-slate-900">04143065287</p>
              <p className="mt-4 text-sm text-slate-500">
                Cédula del beneficiario
              </p>
              <p className="font-semibold text-slate-900">14972818</p>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                Verifica el beneficiario y el monto antes de confirmar la
                operación. La contratación se confirma después de verificar
                el pago recibido.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="text-xl font-extrabold text-slate-900">
              Datos de contratación
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Completa la información para preparar tu solicitud.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="business"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nombre del negocio *
                </label>
                <input
                  id="business"
                  required
                  value={form.business}
                  onChange={(e) =>
                    setForm({ ...form, business: e.target.value })
                  }
                  placeholder="Ej. Mi Tienda"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nombre del responsable *
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Tu nombre y apellido"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Teléfono de contacto *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="Tu número de contacto"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="correo@ejemplo.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="plan"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Plan seleccionado *
                </label>
                <select
                  id="plan"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value as PlanKey)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="monthly">Mensual — $15 USD</option>
                  <option value="annual">Anual — $150 USD</option>
                </select>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-600">
                    Total del plan
                  </span>
                  <span className="text-2xl font-black text-blue-700">
                    ${selectedPlan.price} USD
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Duración: {selectedPlan.duration}
                </p>
              </div>

              <div>
                <label
                  htmlFor="reference"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Referencia del Pago Móvil *
                </label>
                <input
                  id="reference"
                  required
                  value={form.reference}
                  onChange={(e) =>
                    setForm({ ...form, reference: e.target.value })
                  }
                  placeholder="Número de referencia"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="paymentDate"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Fecha del pago
                </label>
                <input
                  id="paymentDate"
                  type="date"
                  value={form.paymentDate}
                  onChange={(e) =>
                    setForm({ ...form, paymentDate: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 px-5 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700"
              >
                Enviar solicitud por WhatsApp
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Se abrirá WhatsApp con tus datos. Debes revisar y enviar el
                mensaje. Adjunta el comprobante directamente en el chat. No
                se activa el servicio automáticamente.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">
            Preguntas frecuentes
          </h2>

          <div className="mt-10 space-y-4">
            <details className="group rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                ¿Puedo probar el sistema antes de pagar?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                Sí. Solicita una demostración por WhatsApp para coordinar el
                acceso de prueba. El acceso público automático todavía está
                pendiente de configuración.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                ¿Cómo se confirma mi contratación?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                Envía la referencia y el comprobante por WhatsApp. El pago
                debe verificarse antes de confirmar la contratación y
                coordinar la activación.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                ¿Cuánto ahorro con el plan anual?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                Doce pagos mensuales de $15 suman $180. El plan anual cuesta
                $150 por 12 meses, por lo que ahorras $30.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                ¿Puedo consultar antes de contratar?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                Sí. Usa el botón de WhatsApp para consultar las funciones,
                los planes y el proceso de contratación.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-slate-800">POS Enterprise</p>
            <p className="mt-1">
              Soluciones para la gestión comercial de tu negocio.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#funciones" className="hover:text-blue-600">
              Funciones
            </a>
            <a href="#planes" className="hover:text-blue-600">
              Planes
            </a>
            <a href="/login" className="hover:text-blue-600">
              Iniciar sesión
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante para consultas */}
      <button
        type="button"
        onClick={askQuestion}
        aria-label="Consultar por WhatsApp"
        title="¿Tienes dudas? Escríbenos"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-emerald-700"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.48 0 .12 5.36.12 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.95 11.95 0 0 0 5.81 1.49h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.5-8.42ZM12.07 21.8a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.88 9.88 0 0 1-1.51-5.25c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
        <span className="hidden sm:inline">¿Tienes dudas?</span>
      </button>
    </main>
  );
}
