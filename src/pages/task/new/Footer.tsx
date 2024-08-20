const Footer: React.FC = () => {
  return (
    <div>Footer</div>
    // <>
    //   <div className="flex items-center mb-6 ">
    //     <p className="text-base font-medium pl-4 ">افزودن پیوست</p>
    //     <FileManagement
    //       inputId="addNewAttach"
    //       htmlForLabel="addNewAttach"
    //       acceptFormat="*/*"
    //       onFileChange={(file) => {
    //         console.log("Selected file:", file);
    //         // منطق باید برای اتچ فایل اجرا شود
    //       }}
    //       buttonLabel={
    //         <div className="flex items-center">
    //           <p className="border-brand-primary items-center justify-center flex border-[1.5px] bg-white rounded-[6px] pt-[3px] pr-[12px] pb-[2px] pl-[12px] text-xs font-normal">
    //             <LinkSVG
    //               className="text-brand-primary text-base font-medium size-4 text-center "
    //               fill={"#208D8E"}
    //             />
    //             آپلود فایل
    //           </p>
    //         </div>
    //       }
    //       inputClassName="hidden"
    //       showSelectedFilePreview={true}
    //     />
    //   </div>
    //   <div className="flex items-center mb-6 ">
    //     <p className="text-base font-medium pl-4 ">افزودن کاور</p>
    //     <FileManagement
    //       inputId="addNewCover"
    //       htmlForLabel="addNewCover"
    //       acceptFormat="image/*"
    //       onFileChange={(file) => {
    //         console.log("Selected file:", file);
    //         // منطق باید برای اتچ فایل اجرا شود
    //       }}
    //       buttonLabel={
    //         <div className="flex items-center">
    //           <p className="border-brand-primary items-center justify-center flex border-[1.5px] bg-white rounded-[6px] pt-[3px] pr-[12px] pb-[2px] pl-[12px] text-xs font-normal">
    //             <LinkSVG
    //               className="text-brand-primary text-base font-medium size-4 text-center "
    //               fill={"#208D8E"}
    //             />
    //             آپلود فایل
    //           </p>
    //         </div>
    //       }
    //       inputClassName="hidden"
    //       showSelectedFilePreview={true}
    //     />
    //   </div>
    //   <div className="flex items-center mb-8 br-[32px]">
    //     {/* /////flag///////////////////////////////////////////////// */}

    //     <button
    //       onClick={openFlagModal}
    //       className="flex mb-[16.5px] mt-[16.5px] ml-4 "
    //     >
    //       <img src={flag} alt="flag icon" className="size-[50px]" />
    //     </button>
    //     {isModalOpen.flag && (
    //       <PriorityOptions isOpen={true} closeModal={closeModal} />
    //     )}
    //     {/* /////////calender///////////////////////////////////////////// */}
    //     <button
    //       onClick={openCalenderModal}
    //       className="flex mb-[16.5px] mt-[16.5px] ml-4 "
    //     >
    //       <img
    //         src={calenderBorder}
    //         alt="calendar icon"
    //         className="size-[50px]"
    //       />
    //     </button>
    //     {isModalOpen.calender && (
    //       <PriorityOptions isOpen={true} closeModal={closeModal} />
    //     )}
    //     {/* ///////tag/////////////////////////////////////////////// */}
    //     <button
    //       onClick={openTagModal}
    //       className="flex mb-[16.5px] mt-[16.5px] ml-4 "
    //     >
    //       <img src={tags} alt="tags icon" className="size-[50px]" />
    //     </button>
    //     {isModalOpen.tag && <View isOpen={true} closeModal={closeModal} />}
    //     {/* ////////////////////////////////////////////////////// */}
    //     <Buttons
    //       type="submit"
    //       classNames="text-xs font-normal mr-auto mb-[15.5px] ml-5 mt-[9px]"
    //     >
    //       ساختن تسک
    //     </Buttons>
    //   </div>
    // </>
  );
};

export default Footer;
