// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const usePremium = () => {
//   const { user, loading } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const { data: isPremium, isPending: isAdminLoading } = useQuery({
//     queryKey: [user?.email, "isPremium"],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/premium/${user.email}`);
//       return res.data?.admin;
//     },
//   });
//   return [isPremium, isAdminLoading];
// };

// export default usePremium;
