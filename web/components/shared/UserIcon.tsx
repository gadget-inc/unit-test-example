import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  firstName: string | null;
  lastName: string | null;
  email: string;
  profilePicture: {
    url: string;
  } | null;
  googleImageUrl: string | null;
}

export const UserIcon = ({ user, className }: { user: User; className?: string }) => {
  return (
    <>
      <Avatar className={className}>
        <AvatarImage src={user.profilePicture?.url ?? user.googleImageUrl ?? ""} alt={user.firstName ?? user.email} />
        <AvatarFallback>{getInitials(user)}</AvatarFallback>
      </Avatar>
    </>
  );
};

const getInitials = (user: User) => {
  if (user.firstName || user.lastName) {
    return ((user.firstName?.slice(0, 1) ?? "") + (user.lastName?.slice(0, 1) ?? "")).toUpperCase();
  } else {
    return user.email.slice(0, 1);
  }
};