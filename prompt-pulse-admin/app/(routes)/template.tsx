import Sidebar from "@/components/Sidebar"
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <div className="2xl:w-[16%] w-1/5">
              <Sidebar />
            </div>
            <div className="2xl:w-[84%] w-[80%] ml-10">
              {children}
            </div>
          </div>
    )
  }