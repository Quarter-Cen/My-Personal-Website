"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";

export default function portfolio() {
  return (
    <>
      <div className="floating-box"></div>
      <div className="fixed z-50">
        <Navbar currentIndex={1} />
      </div>
      <div className="content">
        <div className="section">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex h-[70%] flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#6a7681] text-sm font-normal leading-normal">
                    A selection of my work, showcasing my skills and experience
                    in various design disciplines.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f1f2f4] pl-4 pr-2">
                  <p className="text-[#121416] text-sm font-medium leading-normal">
                    Type
                  </p>
                  <div
                    className="text-[#121416]"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f1f2f4] pl-4 pr-2">
                  <p className="text-[#121416] text-sm font-medium leading-normal">
                    Skills
                  </p>
                  <div
                    className="text-[#121416]"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f1f2f4] pl-4 pr-2">
                  <p className="text-[#121416] text-sm font-medium leading-normal">
                    Year
                  </p>
                  <div
                    className="text-[#121416]"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        "url('/DormMate.png')",
                    }}
                  ></div>
                  <div>
                    <p className="text-[#121416] text-base font-medium leading-normal">
                      DormMate
                    </p>
                    <p className="text-[#6a7681] text-sm font-normal leading-normal">
                      A digital system for managing student dormitories, improving efficiency in room allocation, maintenance
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjIrmLdJUrGYJ9d4OwHlsDh1LDwwrg14IZOa99SJv0-wBcF4oXqSrORVHXGDbv91Vll4DKVj2oAsL6wohmjiygxHy_qIxWuqWUHLEgMhOAV8tlSkOrIWpYY1gncztx2wVnJFTQ1e3N7qkOT_HCethBruTWO1nimggFUxC2ReHSJS4PUVkINQCqKVhg0FE4mh_fNkpS7VQheZ96gteC6qpNRRa2SjmweYIXAtv4jHXWh_h-btXRLBf7RfcDE0hEfyecJjzPHCBcBPf7")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#121416] text-base font-medium leading-normal">
                      Mobile App for Sustainable Living
                    </p>
                    <p className="text-[#6a7681] text-sm font-normal leading-normal">
                      A mobile application promoting eco-friendly habits.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjIrmLdJUrGYJ9d4OwHlsDh1LDwwrg14IZOa99SJv0-wBcF4oXqSrORVHXGDbv91Vll4DKVj2oAsL6wohmjiygxHy_qIxWuqWUHLEgMhOAV8tlSkOrIWpYY1gncztx2wVnJFTQ1e3N7qkOT_HCethBruTWO1nimggFUxC2ReHSJS4PUVkINQCqKVhg0FE4mh_fNkpS7VQheZ96gteC6qpNRRa2SjmweYIXAtv4jHXWh_h-btXRLBf7RfcDE0hEfyecJjzPHCBcBPf7")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#121416] text-base font-medium leading-normal">
                      Interactive Museum Exhibit on Climate Change
                    </p>
                    <p className="text-[#6a7681] text-sm font-normal leading-normal">
                      An interactive exhibit at the Science Museum.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjIrmLdJUrGYJ9d4OwHlsDh1LDwwrg14IZOa99SJv0-wBcF4oXqSrORVHXGDbv91Vll4DKVj2oAsL6wohmjiygxHy_qIxWuqWUHLEgMhOAV8tlSkOrIWpYY1gncztx2wVnJFTQ1e3N7qkOT_HCethBruTWO1nimggFUxC2ReHSJS4PUVkINQCqKVhg0FE4mh_fNkpS7VQheZ96gteC6qpNRRa2SjmweYIXAtv4jHXWh_h-btXRLBf7RfcDE0hEfyecJjzPHCBcBPf7")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#121416] text-base font-medium leading-normal">
                      Brand Identity for a Renewable Energy Company
                    </p>
                    <p className="text-[#6a7681] text-sm font-normal leading-normal">
                      Visual identity for a company focused on renewable energy.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjIrmLdJUrGYJ9d4OwHlsDh1LDwwrg14IZOa99SJv0-wBcF4oXqSrORVHXGDbv91Vll4DKVj2oAsL6wohmjiygxHy_qIxWuqWUHLEgMhOAV8tlSkOrIWpYY1gncztx2wVnJFTQ1e3N7qkOT_HCethBruTWO1nimggFUxC2ReHSJS4PUVkINQCqKVhg0FE4mh_fNkpS7VQheZ96gteC6qpNRRa2SjmweYIXAtv4jHXWh_h-btXRLBf7RfcDE0hEfyecJjzPHCBcBPf7")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#121416] text-base font-medium leading-normal">
                      Website Redesign for an Environmental Nonprofit
                    </p>
                    <p className="text-[#6a7681] text-sm font-normal leading-normal">
                      A modern and user-friendly website for an environmental
                      organization.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjIrmLdJUrGYJ9d4OwHlsDh1LDwwrg14IZOa99SJv0-wBcF4oXqSrORVHXGDbv91Vll4DKVj2oAsL6wohmjiygxHy_qIxWuqWUHLEgMhOAV8tlSkOrIWpYY1gncztx2wVnJFTQ1e3N7qkOT_HCethBruTWO1nimggFUxC2ReHSJS4PUVkINQCqKVhg0FE4mh_fNkpS7VQheZ96gteC6qpNRRa2SjmweYIXAtv4jHXWh_h-btXRLBf7RfcDE0hEfyecJjzPHCBcBPf7")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#121416] text-base font-medium leading-normal">
                      Educational Game on Biodiversity
                    </p>
                    <p className="text-[#6a7681] text-sm font-normal leading-normal">
                      An educational game teaching children about biodiversity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
