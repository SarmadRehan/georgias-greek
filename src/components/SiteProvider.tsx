"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

import { shop } from "@/data/georgias";

import { Logo } from "./Logo";

/** "order" is the Order online panel; "form" and "chat" are the honest demo panel the brief asks for. */
export type PanelKind = "order" | "form" | "chat";

type SiteContextValue = {
  /** Scrolls to the catering inquiry form and focuses its first field. */
  goToForm: () => void;
  openPanel: (kind: PanelKind) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export const FORM_SECTION_ID = "catering";
export const FORM_FIRST_FIELD_ID = "event-type-wedding";

const leadIn: Record<Exclude<PanelKind, "order">, string> = {
  form: "This demo form doesn't send anything. ",
  chat: "This chat is scripted and doesn't send anything. ",
};

const buttonBase = "rounded-full px-5 py-3 text-center font-bold transition-colors";

/**
 * The single shared dialog plus a way to reach the catering form. Nothing on the page sends data
 * anywhere: the form and the chat end here, and "Order online" explains how to order today.
 */
export function SiteProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [kind, setKind] = useState<PanelKind>("order");

  const openPanel = useCallback((next: PanelKind) => {
    setKind(next);
    dialogRef.current?.showModal();
  }, []);

  const goToForm = useCallback(() => {
    document.getElementById(FORM_SECTION_ID)?.scrollIntoView({ block: "start" });
    // Without scrolling again, so smooth scrolling into the section isn't cut short.
    document.getElementById(FORM_FIRST_FIELD_ID)?.focus({ preventScroll: true });
  }, []);

  const value = useMemo(() => ({ goToForm, openPanel }), [goToForm, openPanel]);
  const close = () => dialogRef.current?.close();

  return (
    <SiteContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="panel-title"
        aria-describedby="panel-description"
        className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl bg-white p-0 text-navy shadow-2xl backdrop:bg-navy-deep/60 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicks on the backdrop land on the <dialog> itself, not its content.
          if (event.target === event.currentTarget) close();
        }}
      >
        <div aria-hidden="true" className="bg-navy py-2">
          <div className="greek-key text-gold" />
        </div>
        <div className="p-7 text-center sm:p-8">
          <Logo className="mx-auto w-24" />
          {kind === "order" ? (
            <>
              <h2 id="panel-title" className="mt-5 font-display text-2xl font-bold">
                Online ordering is coming soon
              </h2>
              <p id="panel-description" className="mt-3 leading-relaxed text-slate">
                This is a demo. For now, call <span className="font-bold whitespace-nowrap text-navy">{shop.phone}</span> to
                order, or find the truck on today&apos;s schedule.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href={shop.phoneHref} className={`${buttonBase} bg-aegean text-white hover:bg-aegean-dark`}>
                  Call to order
                </a>
                <a
                  href={shop.scheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} border-2 border-aegean text-aegean hover:bg-aegean hover:text-white`}
                >
                  Today&apos;s location
                </a>
              </div>
            </>
          ) : (
            <>
              <h2 id="panel-title" className="mt-5 font-display text-2xl font-bold">
                This is a demo
              </h2>
              <p id="panel-description" className="mt-3 leading-relaxed text-slate">
                {leadIn[kind]}For now, DM <span className="font-bold whitespace-nowrap text-navy">@{shop.instagramHandle}</span> or call{" "}
                <span className="font-bold whitespace-nowrap text-navy">{shop.phone}</span>.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={shop.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} bg-aegean text-white hover:bg-aegean-dark`}
                >
                  Instagram DM
                </a>
                <a href={shop.phoneHref} className={`${buttonBase} border-2 border-aegean text-aegean hover:bg-aegean hover:text-white`}>
                  Call {shop.phone}
                </a>
              </div>
            </>
          )}
          <button
            type="button"
            autoFocus
            onClick={close}
            className="mt-5 text-sm font-bold text-slate underline underline-offset-4 hover:text-navy"
          >
            Close
          </button>
        </div>
      </dialog>
    </SiteContext.Provider>
  );
}

export function useSite(): SiteContextValue {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used inside SiteProvider");
  return context;
}

/** "Order online": opens the shared panel (the qMenu store Google links to is disabled). */
export function OrderButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const { openPanel } = useSite();
  return (
    <button type="button" className={className} onClick={() => openPanel("order")}>
      {children}
    </button>
  );
}

/** "Catering & weddings": jumps to the demo inquiry form. */
export function CateringButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const { goToForm } = useSite();
  return (
    <button type="button" className={className} onClick={goToForm}>
      {children}
    </button>
  );
}
